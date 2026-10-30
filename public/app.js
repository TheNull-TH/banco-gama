const transfers = [
  ['TRX-84921', 'Nexora Holdings', 'Singapur', '$482,300.00', 'Aprobada'],
  ['TRX-84920', 'Atlas Meridian Ltd.', 'Reino Unido', '$126,850.40', 'En revisión'],
  ['TRX-84919', 'Orbis Capital', 'Suiza', '$875,000.00', 'Aprobada'],
  ['TRX-84918', 'Kairo Systems', 'Japón', '$64,210.75', 'Aprobada'],
  ['TRX-84917', 'Velum Partners', 'Canadá', '$219,440.00', 'Pendiente'],
]

const countries = ['Alemania', 'Brasil', 'Australia', 'Países Bajos', 'Emiratos Árabes']
const names = ['Northstar Group', 'Aurelia Bank', 'Mistral Ventures', 'Cobalt Finance', 'Lumen Trade']

function renderRows() {
  document.getElementById('transferRows').innerHTML = transfers
    .map(
      (row) => `<tr class="transition hover:bg-white/[.025]"><td class="px-5 py-4 font-mono text-xs text-cyber/80">${row[0]}</td><td class="px-5 py-4 font-medium text-slate-200">${row[1]}</td><td class="px-5 py-4 text-slate-400">${row[2]}</td><td class="px-5 py-4 font-mono text-xs text-slate-300">${row[3]}</td><td class="px-5 py-4"><span class="rounded-full px-2.5 py-1 text-[10px] font-semibold ${row[4] === 'Aprobada' ? 'bg-emerald/10 text-emerald' : row[4] === 'En revisión' ? 'bg-amber-400/10 text-amber-300' : 'bg-cyber/10 text-cyber'}">${row[4]}</span></td></tr>`,
    )
    .join('')
}

function runTest() {
  const id = `TRX-${Math.floor(85000 + Math.random() * 999)}`
  const amount = `$${(Math.random() * 900000 + 25000).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`

  transfers.unshift([
    id,
    names[Math.floor(Math.random() * names.length)],
    countries[Math.floor(Math.random() * countries.length)],
    amount,
    'Aprobada',
  ])
  if (transfers.length > 8) transfers.pop()

  renderRows()
  const toast = document.getElementById('toast')
  document.getElementById('toastText').textContent =
    `Nueva fila ${id} procesada en ${Math.floor(38 + Math.random() * 48)} ms.`
  toast.classList.remove('hidden')
  toast.classList.add('toast')
  setTimeout(() => toast.classList.add('hidden'), 4200)
}

renderRows()
document.getElementById('loadTest').addEventListener('click', runTest)
document.getElementById('loadTestMobile').addEventListener('click', runTest)

const drawer = document.getElementById('mobileDrawer')
document.getElementById('menuButton').addEventListener('click', () => {
  drawer.classList.add('open')
  drawer.setAttribute('aria-hidden', 'false')
})
document.getElementById('closeDrawer').addEventListener('click', () => {
  drawer.classList.remove('open')
  drawer.setAttribute('aria-hidden', 'true')
})

const views = {
  dashboard: document.getElementById('dashboardView'),
  transferencias: document.getElementById('transferenciasView'),
  reservas: document.getElementById('reservasView'),
  seguridad: document.getElementById('seguridadView'),
}

function showView(viewName) {
  Object.entries(views).forEach(([name, element]) => {
    element.classList.toggle('hidden', name !== viewName)
  })
  document.querySelectorAll('[data-view]').forEach((link) => {
    link.classList.toggle('bg-cyber/10', link.dataset.view === viewName)
  })
  drawer.classList.remove('open')
  drawer.setAttribute('aria-hidden', 'true')
}

document.querySelectorAll('[data-view]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault()
    showView(link.dataset.view)
  })
})
