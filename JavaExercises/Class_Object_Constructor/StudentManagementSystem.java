import java.util.Scanner;

class Student {
    private int rollNo;
    private String name;
    private int[] marks;
    private double average;
    private String grade;

    Student() {
        rollNo = 0;
        name = "Unknown";
        marks = new int[3];
    }

    Student(int rollNo, String name, int[] marks) {
        this.rollNo = rollNo;
        this.name = name;
        this.marks = marks;
        calculateAverage();
        calculateGrade();
    }

    void calculateAverage() {
        int sum = 0;
        for (int m : marks) {
            sum += m;
        }
        average = sum / (double) marks.length;
    }

    void calculateGrade() {
        if (average >= 90)
            grade = "A+";
        else if (average >= 80)
            grade = "A";
        else if (average >= 70)
            grade = "B";
        else if (average >= 60)
            grade = "C";
        else
            grade = "Fail";
    }

    void displayDetails() {
        System.out.println("Roll No: " + rollNo);
        System.out.println("Name: " + name);
        System.out.print("Marks: ");
        for (int m : marks)
            System.out.print(m + " ");
        System.out.println("\nAverage: " + average);
        System.out.println("Grade: " + grade);
        System.out.println("--------------------------");
    }
}

public class StudentManagementSystem {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter number of students: ");
        int n = sc.nextInt();

        Student[] students = new Student[n];

        for (int i = 0; i < n; i++) {
            System.out.println("\nEnter details for student " + (i + 1));
            System.out.print("Enter Roll No: ");
            int roll = sc.nextInt();
            sc.nextLine();
            System.out.print("Enter Name: ");
            String name = sc.nextLine();
            int[] marks = new int[3];
            for (int j = 0; j < 3; j++) {
                System.out.print("Enter marks of subject " + (j + 1) + ": ");
                marks[j] = sc.nextInt();
            }
            students[i] = new Student(roll, name, marks);
        }

        System.out.println("\n===== STUDENT REPORT =====");
        for (Student s : students)
            s.displayDetails();

        sc.close();
    }
}
