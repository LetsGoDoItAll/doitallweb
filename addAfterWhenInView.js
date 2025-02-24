<hr id="related" />
<script>
setTimeout(() => {
const observer = new IntersectionObserver((entries) => {
const related = entries[0].target
if (related.nextElementSibling.nodeName === 'SCRIPT' && entries[0].isIntersecting) {
related.className = 'visible'
related.insertAdjacentHTML('afterend', `

`)
}
})
observer.observe(document.getElementById('related'));
}, 5555);
</script>
