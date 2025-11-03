"use client"

import React from 'react'
import Arena from '../../Arena'

export default function Page({ params }) {
  // Arena component already reads id from next/navigation or window fallback.
  return <Arena />
}
