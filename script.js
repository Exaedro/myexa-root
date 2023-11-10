const input = document.getElementById('input')
const shell = document.getElementById('shell')

const exaAge = new Date(1180464032 * 1000)

const commands = [
  {
    "name": "help",
    "text": "Welcome to <span class='blue'>NagaShell</span>!<br>Type 'commands' to see the available commands to use, also, you can type '<span class='green'>help command</span>' to get more information about a command!"
  },
  {
    "name": "commands",
    "text": "neofetch packages"
  },
  {
    "name": "neofetch",
    "text": "<div style='display:flex;justify-content:space-between;width:100%;flex-wrap:wrap;'><figure><img src='https://i.pinimg.com/564x/2e/59/ef/2e59ef17408f2ecccb79e3993dcf5764.jpg'></figure><div><p><span class='light-blue'>root</span>@<span class='light-blue'>exaedro</span><p class='blue'>- - - - - - - - - - </p></p><p><span class='light-blue'>OS</span>: <span class='blue'>Julián</span></p><p><span class='light-blue'>Host</span>: <span class='blue'>Argentina</span></p><p><span class='light-blue'>Uptime</span>: <span class='blue' id='uptime'></span></p><p><span class='light-blue'>Packages</span>: <span class='blue'>5</span></p></div></div>"
  },
  {
    "name": "packages",
    "text": '<div class="packages" style="display:flex;width:100%;flex-wrap:wrap"><div class="proyects"><a href="https://neescan.vercel.app/"><div class="proyect"><p>NeeScan</p><span class="available">Available</span></div></a><div class="proyect"><p>AnimeHub</p><span class="n-available">Not Available</span></div></div><div class="proyects"><a href="https://exaedro-dev.vercel.app/"><div class="proyect"><p>exaedro.dev</p><span class="available">Available</span></div></a><div class="proyect"><p>images-api</p><span class="n-available">Not Available</span></div></div><div class="proyects"><a href="https://library-api-roan.vercel.app/"><div class="proyect"><p>library-api</p><span class="available">Available</span></div></a></div></div>'
  },
  {
    "name": "help neofetch",
    "text": "Information about me :D<br><br>Usage: <span class='blue'>neofetch</span>"
  },
  {
    "name": "help packages",
    "text": "My proyects<br><br>Usage: <span class='blue'>packages</span>"
  },
  {
    "name": "clear",
    "text": null
  }
]

input.addEventListener('keydown', elem => {
  if(elem.key != 'Enter') return
  
  let value = input.value.toLowerCase()
  if(!value) return;
  
  let command = commands.find(command => command.name == value)
  
  if(!command) {
    shell.innerHTML = `<p>command <span class='blue'>${value}</span> <span class='red'>not found</span></p>`
    input.value = ""
    return
    }

  if(command == 'clear') return shell.innerHTML = ''

  printShell(command)
})

function printShell(command) {
  shell.innerHTML = `<p>${command.text}</p>`
  input.value = ''

  if(command.name == 'neofetch') updateNeofetch()
}

function updateNeofetch() {
  const now = new Date(Date.now())

  const uptime = document.getElementById('uptime')

  let year = now.getFullYear() - exaAge.getFullYear()
  let hours = now.getHours()

  uptime.textContent = `${year} years, ${hours} hours`
}