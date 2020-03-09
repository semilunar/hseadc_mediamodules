TabAttachment.create(title: '1 видео', link: 'https://www.youtube.com/watch?v=eZwl96QufuQ')
TabAttachment.create(title: '2 видео',    link: 'https://youtu.be/labQqXbp_HU')
TabAttachment.create(title: '3 видео', link: 'https://www.youtube.com/embed/Vtr2jFJjNqI')
TabAttachment.create(title: '4 видео',  link: 'https://www.youtube.com/watch?v=BWXWivwhi14')

# require 'faker'
#
# Rake::Task['db:drop'].invoke
# Rake::Task['db:create'].invoke
# Rake::Task['db:migrate'].invoke
#
# @sections = [
#   'Секция 1. Mobile', 'Секция 2. Web'
# ]
#
# @blocks = [
#   [ "Блок 1", "1" ],
#   [ "Блок 2", "2" ],
#   [ "Блок 3", "3" ],
#   [ "Блок 4", "4" ],
#   [ "Блок 5", "5" ],
#   [ "Блок 6", "6" ]
# ]
#
# @phrases = [
#   'Заголовок',
#   'Подзаголовок',
#   'Параграф текста',
#   'Изображение',
#   'Видео'
# ]
#
# def seed_data

#
# def create_boards
#   @boards.each do |board|
#     user = User.all.sample
#     board = user.boards.create!(title: board[0], description: board[1])
#   end
# end
#
# def create_links
#   @links.each do |link|
#     board = Board.all.sample
#     user = User.find(board.user_id)
#     l = user.links.create!(url: link, board_id: board.id)
#
#   end
# end
#
# seed_data
