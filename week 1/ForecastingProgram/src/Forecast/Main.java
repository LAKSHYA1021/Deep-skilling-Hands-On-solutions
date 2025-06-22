package Forecast;

public class Main {
    public static void main(String[] args) {
        double currentAmount = 10000;
        double growthRate = 0.10;
        int years = 5;

        System.out.println(" Recursive Calculation:");
        double result = Forecasting.futureValue(currentAmount, growthRate, years);
        System.out.printf("Future value after %d years: ₹%.2f\n", years, result);

        System.out.println("\n Optimized (Memoized) Calculation:");
        double[] memo = new double[years + 1];
        double resultMemo = Forecasting.futureValueMemo(currentAmount, growthRate, years, memo);
        System.out.printf("Future value after %d years (memoized): ₹%.2f\n", years, resultMemo);
    }
}
