def create_tab_attachments
  TabAttachment.create(title: '2 video', link: 'https://youtu.be/ql0DZUAfPOs', position: 2)
  TabAttachment.create(title: '3 iframe', link: 'https://readymag.com/semilunar/koinonia/', position: 1)
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
