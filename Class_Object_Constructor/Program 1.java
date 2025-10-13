class Student {
    String name = "John";
    int age = 20;
    void display() {
        System.out.println("Name: " + name + ", Age: " + age);
    }

    public static void main(String[] args) {
        Student s1 = new Student();
        s1.display();
    }
}
