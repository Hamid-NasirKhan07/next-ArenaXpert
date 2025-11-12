import Link from "next/link";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function registerPlayer(formData) {
  "use server";

  const playerData = {
    email: formData.get("email"),
    sport: formData.get("sport"),
    displayName: formData.get("displayName"),
    speciality: formData.get("speciality"),
    description: formData.get("description"),
    contactNumber: formData.get("contactNumber"),
  };

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || ""}/api/player/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(playerData),
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error || "Failed to register player");
    }

    revalidatePath("/player");
    redirect("/player?success=true");
  } catch (error) {
    redirect("/player?error=" + encodeURIComponent(error.message));
  }
}

export default async function PlayerPage(props) {
  const searchParams = await props.searchParams;
  const { success, error, sport } = searchParams || {};

  const specialities = {
    cricket: ["Batsman", "Bowler", "Allrounder"],
    football: ["Forward", "Midfielder", "Defender", "Goalkeeper"],
    badminton: ["Singles", "Doubles", "Mixed Doubles"],
  };

  const selectedSpecialities = sport ? specialities[sport] || [] : [];

  return (
    <div>
      <div className="container-xxl py-5 bg-primary hero-header mb-5">
        <div className="container my-5 py-5 px-lg-5 text-center text-white">
          <h1>Register as a Player</h1>
          <Link href="/" className="text-white">Home</Link> / Player
        </div>
      </div>

      <div className="container px-lg-5">
        {success && <div className="alert alert-success">Player registered successfully!</div>}
        {error && <div className="alert alert-danger">Error: {decodeURIComponent(error)}</div>}

        {/* SPORT SELECT FORM */}
        <form method="GET" action="/player" id="sportForm" className="mb-4">
          <div className="mb-3">
            <label htmlFor="sport" className="form-label">Select Sport</label>
            <select
              id="sport"
              name="sport"
              className="form-select"
              defaultValue={sport || ""}
              required
              onChange="document.getElementById('sportForm').submit();"
            >
              <option value="">-- Select Sport --</option>
              <option value="cricket">Cricket</option>
              <option value="football">Football</option>
              <option value="badminton">Badminton</option>
            </select>
          </div>
        </form>

        {/* Only show specialties and rest of form if sport is selected */}
        {sport && (
          <form action={registerPlayer}>
            <input type="hidden" name="sport" value={sport} />

            <div className="mb-3">
              <label htmlFor="displayName" className="form-label">Display Name</label>
              <input type="text" id="displayName" name="displayName" className="form-control" required />
            </div>

            {selectedSpecialities.length > 0 && (
              <div className="mb-3">
                <label htmlFor="speciality" className="form-label">Select Speciality ({sport})</label>
                <select id="speciality" name="speciality" className="form-select" required>
                  <option value="">-- Select Speciality --</option>
                  {selectedSpecialities.map((s) => (
                    <option key={s} value={s.toLowerCase()}>{s}</option>
                  ))}
                </select>
              </div>
            )}

            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description</label>
              <textarea id="description" name="description" className="form-control" rows={4} />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" id="email" name="email" className="form-control" required />
            </div>

            <div className="mb-3">
              <label htmlFor="contactNumber" className="form-label">Contact Number</label>
              <input type="tel" id="contactNumber" name="contactNumber" className="form-control" />
            </div>

            <button type="submit" className="btn btn-primary">Register Player</button>
          </form>
        )}
      </div>

      {/* 👇 Small script to auto-submit sport form when changed */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', () => {
              const select = document.getElementById('sport');
              select.addEventListener('change', () => {
                if (select.value) document.getElementById('sportForm').submit();
              });
            });
          `,
        }}
      />
    </div>
  );
}
