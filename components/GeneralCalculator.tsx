'use client'

import { useState } from 'react'
import type { Locale } from '@/lib/i18n/config'
import { t } from '@/lib/i18n'

export function GeneralCalculator({
  fromName,
  toName,
  fromSymbol,
  toSymbol,
  factor,
  offset,
  locale,
  defaultValue = 1,
}: {
  fromName: string
  toName: string
  fromSymbol: string
  toSymbol: string
  factor: number
  offset: number
  locale: Locale
  defaultValue?: number
}) {
  const [input, setInput] = useState(String(defaultValue))

  const numValue = parseFloat(input) || 0
  // Linear conversion: result = value * factor + offset
  const result = numValue * factor + offset

  const formatted = Math.abs(result) >= 1000
    ? result.toFixed(2)
    : Math.abs(result) >= 1
      ? result.toFixed(4).replace(/\.?0+$/, '')
      : result.toPrecision(6).replace(/\.?0+$/, '')

  return (
    <div className="rounded-lg border bg-card p-6 mb-10">
      <div className="flex flex-wrap gap-4 items-end">
        <div className="flex-1 min-w-[140px]">
          <label className="text-sm font-medium mb-1 block">{fromName} ({fromSymbol})</label>
          <input
            type="number"
            value={input}
            onChange={e => setInput(e.target.value)}
            step="any"
            className="w-full rounded-md border bg-background px-3 py-2 text-sm"
            placeholder={t(locale, 'enterValue')}
          />
        </div>

        <div className="text-xl font-bold text-muted-foreground px-2">=</div>

        <div className="flex-1 min-w-[140px]">
          <label className="text-sm font-medium mb-1 block">{toName} ({toSymbol})</label>
          <div className="w-full rounded-md border bg-muted px-3 py-2 text-sm font-mono font-semibold">
            {numValue !== 0 ? formatted : '—'}
          </div>
        </div>
      </div>
    </div>
  )
}
