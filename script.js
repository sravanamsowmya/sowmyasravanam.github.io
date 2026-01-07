document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener('click',e=>{
    e.preventDefault()
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior:'smooth'
    })
  })
})

const toggle=document.getElementById("themeToggle")

toggle.onclick=()=>{
  document.body.classList.toggle("dark")
  toggle.textContent=document.body.classList.contains("dark")?"☀️":"🌙"
}
