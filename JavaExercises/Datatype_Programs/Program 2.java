class TypeCasting {
    public static void main(String[] args) {
        int a = 10;
        double b = a; // implicit
        double c = 12.7;
        int d = (int) c; // explicit
        System.out.println("Implicit casting: " + b);
        System.out.println("Explicit casting: " + d);
    }
}
