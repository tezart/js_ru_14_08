# js_ru_14_08

##HT1.1 Реализовать список комментов внутри статьи, скрывать и показывать их по нажатию на копку
##HT1.2 менять текст на кнопке(open/hide)

##HT2.1 Вынести функционал аккордеона в декоратор
##HT2.2 Добавить возможность закрыть статью при повторном клике
##HT2.3 Написать для всего propTypes

##HT3.1 Добавить календарь(https://github.com/gpbl/react-day-picker) с возможностью выбора диапазона дат
##HT3.2 Выводить этот диапазон
##HT3.3 добавить форму нового коммента(user, text) в CommentList
##HT3.4 сделать валидацию: не больше 100 символов текст и 20 юзер; Подсвечивать поле красным, если < 30 символов текст и < 10 юзер
##HT3.5 Очищать форму при сабмите

##HT4.1 Вынести состояние фильтров в стор
##HT4.2 Реализовать фильтрацию статей для ArticleList

##HT5.1 Сделать мидлвару для генерации рандомных id
##HT5.2 Переписать статьи на структуру аналогичну комментам
##HT5.3 Реализовать функционал добавления коммента к статье

##HT6.1 Переписать comments reducer на immutable.js
##HT6.2 Реализовать загрузку комментов к статье(api /api/comment?acticle=56c782f18990ecf954f6e027), при открытии списка. Загружать один раз для статьи
##HT6.3 Показывать лоадер при загрузке комментов

##HT7.1 Сделать отдельный роут для пагинации комментов(/comments/2)
##HT7.2 Реализовать пагинацию всех комметнов, загружать каждую страницу только 1 раз, по 5 комментов на страницу. API: /api/comment?limit=5&offset=5