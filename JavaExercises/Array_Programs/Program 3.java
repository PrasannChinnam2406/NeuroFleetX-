class MaxElement {
    public static void main(String[] args) {
        int[] arr = {4, 9, 2, 7, 5};
        int max = arr[0];
        for (int i : arr) if (i > max) max = i;
        System.out.println("Maximum = " + max);
    }
}
