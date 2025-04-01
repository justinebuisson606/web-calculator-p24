// NOTE: 
// This is the starter file for a blog post "How to build a calculator". You can follow the lesson at https://zellwk.com/blog/calculator-part-1

// # START EDITING YOUR JAVASCRIPT HERE
// ===============

const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')
const pad = calculator.querySelector('.calculator__display')


keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const pad = document.querySelector('.calculator__display')
    const padContent = pad.textContent
    const previousKeyType = calculator.dataset.previousKeyType

    if (!action) {
        calculator.dataset.previousKeyType = 'numberkey'
        if (padContent === '0'|| previousKeyType === 'operator') {
          pad.textContent = keyContent
        } else {
          pad.textContent = padContent + keyContent
    
        }
      }
    
    
    

    if (
    action === 'add'||action === 'subtract' || action === 'multiply'|| action === 'divide')
    {
        console.log('on additionne!')
        key.classList.add('is-depressed')
        calculator.dataset.previousKeyType = 'operator'
        calculator.dataset.firstValue = padContent
        calculator.dataset.operator = action
          }
    

    const calculate = (n1, operator, n2) => {
        let result = ''
      
        if (operator === 'add') {
          result = parseInt(n1) + parseInt(n2)
        } else if (operator === 'subtract') {
          result = parseInt(n1) - parseInt(n2)
        } else if (operator === 'multiply') {
          result = parseInt(n1) * parseInt(n2)
        } else if (operator === 'divide') {
          result = parseInt(n1) / parseInt(n2)
        }
      
        return result
      }
    if (action === 'calculate') {
        const firstValue = calculator.dataset.firstValue
        const operator = calculator.dataset.operator
        const secondValue = padContent
      
        pad.textContent = calculate(firstValue, operator, secondValue)
      }
    
    Array.from(key.parentNode.children).forEach(k =>
        k.classList.remove('is-depressed'))
  }
})

