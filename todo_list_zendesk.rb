# TodoList should behave like an array
# every instance should initialize as an empty array
# getter method based on indices. also a push method
# if getter method is for an index that doesn't exist, return nil
# after pushing new story, todolist should be sorted in descending priority order
class TodoList
  attr_reader :todo_list
  def initialize
    @todo_list = []
  end

  def [](idx)
    story = @todo_list[idx]
    # if story
    #   title = story.title
    #   priority = story.priority
    #   "#{priority} - #{title}"
    # end
  end

  def push(story)
    @todo_list.push(story)
    @todo_list.sort! {|story1, story2| -(story1.priority <=> story2.priority)}
  end
end

# Story should have 2 attributes, title and priority
# takes a ruby hash as argument
# we still want to store title and priority as separate instance vars
# since we want to output each story as "Priority-Title", we will want attr_readers on each instance var
class Story
  attr_reader :title, :priority
  def initialize(story)
    @title = story[:title]
    @priority = story[:priority]
  end

  def to_s
    "#{@priority} - #{@title}"
  end

  def inspect
    "#{@priority} - #{@title}"
  end
end

# Create a new instance of TodoList
# Create a new Story with title "First Story" and priority 50
# The TodoList should contain a set of 'Story' objects, to start off it will be 1 story
# Print the Story's output as 'priority - title', eg "50 - First Story"
todos = TodoList.new
todos.push(Story.new(title: "First Story", priority: 50))
todos.push(Story.new(title: "Second Story", priority: 20))
todos.push(Story.new(title: "Third Story", priority: 80))
todos.push(Story.new(title: "Fourth Story", priority: 90))
# Should output "50 - First Story"
puts todos[0]
