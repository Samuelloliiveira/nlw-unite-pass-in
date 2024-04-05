import { prisma } from '../src/lib/prisma'

async function seed() {
  await prisma.event.create({
    data: {
      id: '3fb854bd-4537-445b-bc8a-9ec2b2aed15e',
      title: 'Encontro de Devs',
      slug: 'encontro-de-devs',
      details: 'Encontro de devs online para trocar experiências',
      maximumAttendees: 120,
    }
  })
}

seed().then(() => {
  console.log('Database seeded! 🌱')
  prisma.$disconnect()
})