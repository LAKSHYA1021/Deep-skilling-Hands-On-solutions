package Forecast;

public class Forecasting {
    public static double futureValue(double currentAmount, double rate, int years) {
        if (years == 0) return currentAmount;
        return (1 + rate) * futureValue(currentAmount, rate, years - 1);
    }

    public static double futureValueMemo(double currentAmount, double rate, int years, double[] memo) {
        if (years == 0) return currentAmount;
        if (memo[years] != 0) return memo[years];
        memo[years] = (1 + rate) * futureValueMemo(currentAmount, rate, years - 1, memo);
        return memo[years];
    }

}
