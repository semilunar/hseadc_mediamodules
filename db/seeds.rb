def create_tab_attachments
  TabAttachment.create(title: '1 видео', link: 'https://www.youtube.com/watch?v=eZwl96QufuQ')
  TabAttachment.create(title: '2 видео', link: 'https://youtu.be/labQqXbp_HU')
  TabAttachment.create(title: '3 видео', link: 'https://www.youtube.com/embed/Vtr2jFJjNqI')
  TabAttachment.create(title: '4 видео', link: 'https://www.youtube.com/watch?v=BWXWivwhi14')
end

def drop_db
 Rake::Task['db:drop'].invoke
 Rake::Task['db:create'].invoke
 Rake::Task['db:migrate'].invoke
end

def seed_data
  create_tab_attachments
end

drop_db
seed_data
