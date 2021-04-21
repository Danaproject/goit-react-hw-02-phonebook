# goit-react-hw-02-phoenbook

GoIT course React homework

# Критерии приема

- Создана репозитория `goit-react-hw-02-phoenbook`.
- При сдаче домашней работы есть две ссылки: на исходные файлы и рабочие.
  страницы каждого задания на `GitHub pages`.
- При запуске кода задания, в консоли нету ошибок и предупреждений.
- Для каждого компонента есть отдельный файл в папке `src/components`.
- Для компонентов описаны `propTypes`, и где необходимо, `defaultProps`.
- Все что компонент ожидает в виде пропсов, передается ему при вызове.
- JS-код чистый и понятный, используется `Prettier`.
- Стилизация делается только `SASS`, `CSS-модулями` или `Styled Components`.
  Выделяй 20% времени на стилизацию и 80% на JS.

## Заданиe

# Телефонная книга

Напиши приложение хранения контактов телефонной книги.

## Шаг 1

Приложение должно состоять из формы и списка контактов. На текущем шаге реализуй
добавление имени контакта и отображение списка контактов. Приложение не должно
сохранять контакты между разными сессиями (обновление страницы).

Используй эту разметку инпута с встроенной валидацией для имени контакта.

```html
<input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
  required
/>
```

Состояние хранящееся в родительском компоненте `<App>` обязательно должно быть
следующего вида, добавлять новые свойства нельзя.

```bash
state = {
  contacts: [],
  name: ''
}
```

Каждый контакт должен быть объектом со свойствами `name` и `id`. Для генерации
идентификаторов используй любой подходящий пакет, например
[uuid](https://www.npmjs.com/package/uuid#version-4). После завершения этого
шага, приложение должно выглядеть примерно так.

![preview](./src/mockup/step-1.png)

## Шаг 2

Расширь функционал приложения, позволив пользователям добавлять номера
телефонов. Для этого добавь `<input type="tel">` в форму, и свойство для
хранения его значения в состоянии.

```bash
state = {
  contacts: [],
  name: '',
  number: ''
}
```

Используй эту разметку инпута с встроенной валидацией для номера контакта.

```html
<input
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
  required
/>
```

После завершения этого шага, приложение должно выглядеть примерно так.

![preview](./src/mockup/step-2.png)

## Шаг 3

Добавь поле поиска, которое можно использовать для фильтрации списка контактов
по имени.

- Поле поиска это инпут без формы, значение которого записывается в состояние
  (контролируемый элемент).
- Логика фильтрации должна быть нечувствительна к регистру.

```bash
state = {
  contacts: [],
  filter: '',
  name: '',
  number: ''
}
```

![preview](./src/mockup/step-3.gif)

Когда мы работаем над новым функционалом, бывает удобно жестко закодировать
некоторые данные в состояние. Это избавит от необходимости вручную вводить
данные в интерфейсе для тестирования работы нового функционала. Например можно
использовать такое начальное состояние.

```bash
state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  name: '',
  number: ''
}
```

## Шаг 4

Если твое приложение реализовано в одном компоненте `<App>`, выполни
рефакторинг, выделив подходящие части в отдельные компоненты. В состоянии
корневого компонента `<App>` останутся только свойства `contacts` и `filter`.

```bash
state = {
  contacts: [],
  filter: ''
}
```

Достаточно выделить четыре компонента: форма добавления контактов, список
контактов, элемент списка контактов и фильтр поиска.

После рефакторинга корневой компонент приложения будет выглядеть так.

```html
<div>
  <h1>Phonebook</h1>
  <ContactForm ... />

  <h2>Contacts</h2>
  <Filter ... />
  <ContactList ... />
</div>
```

## Шаг 5

Запрети пользователю возможность добавлять контакты, имена которых уже есть в
телефонной книге. При попытке выполнить такое действие выведи `alert` с
предупреждением.

![preview](./src/mockup/step-5.png)

## Шаг 6

Расширь функционал приложения, позволив пользователю удалять ранее сохраненные
контакты.

![preview](./src/mockup/step-6.gif)

# Getting Started with Create React App

This project was bootstrapped with
[Create React App](https://github.com/facebook/create-react-app).
