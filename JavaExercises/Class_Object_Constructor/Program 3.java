class Person {
    String name;
    int age;

    Person() {
        name = "Unknown";
        age = 18;
    }

    Person(String n, int a) {
        name = n;
        age = a;
    }

    void show() {
        System.out.println(name + " - " + age);
    }

    public static void main(String[] args) {
        Person p1 = new Person();
        Person p2 = new Person("Alice", 25);
        p1.show();
        p2.show();
    }
}
