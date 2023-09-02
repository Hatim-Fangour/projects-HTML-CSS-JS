const prev = document.getElementById("prev")
const next = document.getElementById("next")
const progress = document.getElementById('progress')
const steps = document.querySelectorAll('.step')

var currentStep = 1



next.addEventListener("click", ()=>{    
    currentStep++;
    
    if(currentStep > steps.length) {
        currentActive = steps.length
    }
    
    update()

})

prev.addEventListener("click", ()=>{
    currentStep--;

    if(currentStep < steps.length) {
        currentActive = steps.length
    }

    update()
})




function update() {
    steps.forEach((step, idx) => {

        if(idx < currentStep) {
            step.classList.add('active')
        } else {
            step.classList.remove('active')
        }
    })



    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (steps.length - 1)  * 100  + '%'
    
    if(currentStep === 1) {
        prev.disabled = true
    } else if(currentStep === steps.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}
