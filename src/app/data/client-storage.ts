import { NotesType } from '@/app/(DashboardLayout)/types/apps/notes'
import { TicketType } from '@/app/(DashboardLayout)/types/ticket'
import { initialNotes } from './notes-data'
import { initialTickets } from './ticket-data'

const NOTES_KEY = 'tailwind-admin-notes'
const TICKETS_KEY = 'tailwind-admin-tickets'

export const getStoredNotes = (): NotesType[] => {
  if (typeof window === 'undefined') return initialNotes.map((note) => ({ ...note }))

  const stored = window.localStorage.getItem(NOTES_KEY)
  return stored ? JSON.parse(stored) : initialNotes.map((note) => ({ ...note }))
}

export const saveNotes = (notes: NotesType[]) => {
  window.localStorage.setItem(NOTES_KEY, JSON.stringify(notes))
}

export const getStoredTickets = (): TicketType[] => {
  if (typeof window === 'undefined') return initialTickets.map((ticket) => ({ ...ticket }))

  const stored = window.localStorage.getItem(TICKETS_KEY)
  const tickets: TicketType[] = stored ? JSON.parse(stored) : initialTickets

  return tickets.map((ticket) => ({ ...ticket, Date: new Date(ticket.Date) }))
}

export const saveTickets = (tickets: TicketType[]) => {
  window.localStorage.setItem(TICKETS_KEY, JSON.stringify(tickets))
}
