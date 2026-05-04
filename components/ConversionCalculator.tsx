'use client'

import { useState } from 'react'
import type { Ingredient } from '@/lib/data/ingredients'
import type { Locale } from '@/lib/i18n/config'
import { cupsToGrams, gramsToCups, type CupSize } from '@/lib/conversions/cooking'
import { t } from '@/lib/i18n'

export function ConversionCalculator({
  ingredient,
  locale,
}: {
  ingredient: Ingredient
  locale: Locale
}) {
  const [cups, setCups] = useState('1')
  const [cupSize, setCupSize] = useState<CupSize>('us')
  const [direction, setDirection] = useState<'cups-to-grams' | 'grams-to-cups'>('cups-to-grams')

  const numValue = parseFloat(cups) || 0

  const result = direction === 'cups-to-grams'
    ? cupsToGrams(numValue, ingredient, cupSize)
    : gramsToCups(numValue, ingredient, cupSize)

  const fromLabel = direction === 'cups-to-grams' ? t(locale, 'cups') : t(locale, 'grams')
  const toLabel = direction === 'cups-to-grams' ? t(locale, 'grams') : t(locale, 'cups')

  return (
    <div className="rounded-lg border bg-card p-6 mb-10">
      <div className="flex flex-wrap gap-4 items-end">
        <div className="flex-1 min-w-[120px]">
          <label className="text-sm font-medium mb-1 block">{fromLabel}</label>
          <input
            type="number"
            value={cups}
            onChange={e => setCups(e.target.value)}
            step="0.25"
            min="0"
            className="w-full rounded-md border bg-background px-3 py-2 text-sm"
            placeholder={t(locale, 'enterValue')}
          />
        </div>

        <button
          onClick={() => setDirection(d => d === 'cups-to-grams' ? 'grams-to-cups' : 'cups-to-grams')}
          className="px-3 py-2 rounded-md border hover:bg-accent transition-colors text-sm"
          aria-label="Swap direction"
        >
          ⇄
        </button>

        <div className="flex-1 min-w-[120px]">
          <label className="text-sm font-medium mb-1 block">{t(locale, 'result')}</label>
          <div className="w-full rounded-md border bg-muted px-3 py-2 text-sm font-mono font-semibold">
            {numValue > 0 ? `${result} ${toLabel.toLowerCase()}` : '—'}
          </div>
        </div>

        <div className="min-w-[160px]">
          <label className="text-sm font-medium mb-1 block">{t(locale, 'cupSize')}</label>
          <select
            value={cupSize}
            onChange={e => setCupSize(e.target.value as CupSize)}
            className="w-full rounded-md border bg-background px-3 py-2 text-sm"
          >
            <option value="us">{t(locale, 'usCup')}</option>
            <option value="metric">{t(locale, 'metricCup')}</option>
            <option value="imperial">{t(locale, 'imperialCup')}</option>
          </select>
        </div>
      </div>
    </div>
  )
}
