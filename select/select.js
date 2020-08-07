const getTemplate = (data = [], placeholder)=>{
    const items = data.map(item =>{
        return `
         <li class="select__item" data-type = "item" data-id= ${item.id} >${item.value}</li>
        `
    })
    return `
     <div class="select__input" data-type = "input">
     <span data-type="value">${placeholder}</span>
</div>
            <div class="select__dropdown">
           <ul class="select__list">
               <li class="select__item">${items.join('')}</li>
           </ul>
            </div>
    `
}
export class Select{
    constructor(selector,options) {
        this.el = document.querySelector(selector) // находим селектор в DOM
        this.options = options
        this.selectedId = null
        this.#render()
        this.#setup()

    }
    //открыть селект
    open(){
        this.el.classList.add('open')
    }

    // рендаринг контента в DOM
    #render() {
        const {placeholder, data}= this.options
        this.el.classList.add('select')
        this.el.innerHTML = getTemplate(data,placeholder)

    }
    //закрыть селект
    close(){
      this.el.classList.remove('open')
    }
    #setup(){
        this.clickHandler = this.clickHandler.bind(this)
        this.el.addEventListener('click', this.clickHandler)
        this.val = this.el.querySelector('[data-type="value"]')
    }
    clickHandler(event){
        const {type} = event.target.dataset
        if (type === 'input'){
            this.toggle()
        } else if (type=== 'item'){
            const id = event.target.dataset.id
            this.select(id)
        }
    }
    //выбирает элементы списка
    get current(){
        return this.options.data.find(item => item.id === this.selectedId)
    }
    select(id){
        this.selectedId = id
        this.val.textContent = this.current.value

    }
    //провряет есть ли у элемента класс open
    get isOpen(){
        return this.el.classList.contains('open')
    }
    //переключатель dropdown
    toggle(){
        this.isOpen ? this.close(): this.open()
    }
    destroy(){
        this.el.remove('click', this.clickHandler())

    }
}
