'use client'

import { useEffect, useState } from 'react'
import CardBox from '@/app/components/shared/CardBox'
import NotesSidebar from '@/app/components/apps/notes/NotesSidebar'
import NoteContent from '@/app/components/apps/notes/NoteContent'
import { Icon } from '@iconify/react'
import { NotesType } from '@/app/(DashboardLayout)/types/apps/notes'
import { getStoredNotes, saveNotes } from '@/app/data/client-storage'
import AddNotes from './AddNotes'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent } from '@/components/ui/sheet'

interface ColorType {
  id: number
  disp: string
  lineColor?: string
}

const NotesApp = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [notes, setNotes] = useState<NotesType[]>([])
  const [loading, setLoading] = useState(false)
  const [selectedNoteId, setSelectedNoteId] = useState<number | null>(null)

  const handleClose = () => setIsOpen(false)

  const colorVariation: ColorType[] = [
    { id: 1, lineColor: 'warning', disp: 'warning' },
    { id: 2, lineColor: 'primary', disp: 'primary' },
    { id: 3, lineColor: 'error', disp: 'error' },
    { id: 4, lineColor: 'success', disp: 'success' },
    { id: 5, lineColor: 'secondary', disp: 'secondary' },
  ]

  useEffect(() => {
    setLoading(true)
    setNotes(getStoredNotes())
    setLoading(false)
  }, [])

  const updateNote = (id: number, title: string, color: string) => {
    setNotes((prev) => {
      const updated = prev.map((note) =>
        note.id === id ? { ...note, title, color } : note
      )
      saveNotes(updated)
      return updated
    })
  }

  useEffect(() => {
    if (notes.length > 0 && selectedNoteId === null) {
      setSelectedNoteId(notes[0].id)
    }
  }, [notes, selectedNoteId])

  const addNote = (note: { title: string; color: string }) => {
    const newNote: NotesType = {
      ...note,
      id: Math.max(0, ...notes.map((item) => item.id)) + 1,
      datef: new Date().toISOString(),
      deleted: false,
    }
    setNotes((prev) => {
      const updated = [...prev, newNote]
      saveNotes(updated)
      return updated
    })
    setSelectedNoteId(newNote.id)
  }

  const deleteNote = (id: number) => {
    setNotes((prev) => {
      const updated = prev.filter((note) => note.id !== id)
      saveNotes(updated)
      return updated
    })
    if (selectedNoteId === id) setSelectedNoteId(null)
  }

  return (
    <CardBox className='p-0 overflow-hidden'>
      <div className='flex'>
        {/* Sidebar */}
        <div>
          <Sheet open={isOpen} onOpenChange={handleClose}>
            <SheetContent
              side='left'
              className='max-w-[320px] sm:max-w-[320px] w-full h-full lg:hidden block'
            >
              <NotesSidebar
                notes={notes}
                loading={loading}
                onSelectNote={(id: number) => setSelectedNoteId(id)}
                onDeleteNote={deleteNote}
              />
            </SheetContent>
          </Sheet>
          <div className='max-w-[320px] h-auto lg:block hidden'>
            <NotesSidebar
              notes={notes}
              loading={loading}
              onSelectNote={(id: number) => setSelectedNoteId(id)}
              onDeleteNote={deleteNote}
            />
          </div>
        </div>

        {/* Content */}
        <div className='w-full'>
          <div className='flex justify-between items-center border-b border-ld py-4 px-6'>
            <div className='flex gap-3 items-center'>
              <Button
                color={'lightprimary'}
                onClick={() => setIsOpen(true)}
                className='btn-circle p-0 lg:!hidden flex'
              >
                <Icon icon='tabler:menu-2' height={18} />
              </Button>
              <h6 className='text-base'>Edit Note</h6>
            </div>
            <AddNotes colors={colorVariation} addNote={addNote} />
          </div>

          <NoteContent
            note={notes.find(n => n.id === selectedNoteId) || null}
            updateNote={updateNote}
          />
        </div>
      </div>
    </CardBox>
  )
}

export default NotesApp
