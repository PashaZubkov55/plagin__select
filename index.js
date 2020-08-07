import {Select} from './select/select'
import './select/styles.scss'
const select = new Select('#select', {
    placeholder: 'Выбрать элемент',
    data: [
        {id:'1', value: 'Frontend'},
        {id:'2', value: 'Angular'},
        {id:'3', value: 'Vue'},
        {id:'4', value: 'TypeScript'},
        {id:'5', value: 'JavaScript'}
    ]
})