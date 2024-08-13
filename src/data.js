function getRandomEvent() {
  const events = [
    'Restaurangbokning',
    'MS Gloskär',
    'Jugend Sauna',
    'Öltasting + planka',
    'Glasbruket',
    'Jugendsalen',
  ]
  return events[Math.floor(Math.random() * events.length)]
}

function getRandomName() {
  const names = [
    'Erik Andersson / Eero Virtanen',
    'Lars Johansson / Lauri Lahtinen',
    'Karin Nilsson / Katri Mäkinen',
    'Johan Karlsson / Jukka Korhonen',
    'Anna Eriksson / Anni Niemi',
    'Mikael Svensson / Mika Mäkinen',
    'Maria Larsson / Mari Lehtinen',
    'Per Gustavsson / Pertti Salonen',
    'Eva Lindberg / Eeva Koskinen',
    'Oskar Berg / Olli Järvinen',
    'Linda Hansson / Liisa Hämäläinen',
    'Nils Olsson / Niilo Kallio',
  ]
  return names[Math.floor(Math.random() * names.length)]
}

export async function getOrder(id) {
  return (await getOrders()).find((order) => order.id.toString() === id)
}

export async function getRecentOrders() {
  return (await getOrders()).slice(0, 10)
}

export async function getOrders() {
  const orders = []
  for (let i = 0; i < 12; i++) {
    orders.push({
      id: 3000 + i,
      url: `/orders/${3000 + i}`,
      date: new Date(Date.now() - i * 86400000 * 7).toLocaleDateString('fi-FI', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      amount: {
        eur: `€${(Math.random() * 300 + 50).toFixed(2)}`,
      },
      payment: {
        transactionId: `ch_${i}${Math.random().toString(36).substring(2, 15)}`,
        card: {
          number: (Math.floor(Math.random() * 9000) + 1000).toString(),
          type: 'Visa',
          expiry: '06 / 2024',
        },
      },
      customer: {
        name: getRandomName(),
        email: `customer${i}@example.com`,
        address: 'Street Address, City, Country',
      },
      event: {
        name: getRandomEvent(),
        thumbUrl: '/path/to/event-thumbnail.jpg',
      },
    })
  }
  return orders
}

export async function getEvent(id) {
  return (await getEvents()).find((event) => event.id.toString() === id)
}

export async function getEventOrders(id) {
  return (await getOrders()).filter((order) => order.event.name.toString() === id)
}

export async function getEvents() {
  return [
    // Your existing event data here
  ]
}

export function getCountries() {
  return [
    // Your existing country data here
  ]
}
