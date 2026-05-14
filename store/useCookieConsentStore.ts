import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type ConsentStatus = 'accepted' | 'declined' | null

interface CookieConsentStore {
  status: ConsentStatus
  accept: () => void
  decline: () => void
}

export const useCookieConsentStore = create<CookieConsentStore>()(
  persist(
    (set) => ({
      status: null,
      accept: () => set({ status: 'accepted' }),
      decline: () => set({ status: 'declined' }),
    }),
    { name: 'cookie-consent' }
  )
)
