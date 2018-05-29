class Course {
  constructor(
    public title: string,
    public about: string,
    public author: string
  ) {}

  describe() {}
}

class OnlineCourse extends Course {
  static CLASSNAME = "OnlineCourse";
  constructor(
    public title: string,
    public about: string,
    public author: string,
    public meetingLink: string
  ) {
    super(title, about, author);
  }

  describe() {}
}
