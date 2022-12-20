package AoC22.Day4;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class Part2 {
    public static void main(String[] args) throws FileNotFoundException {
        File file = new File("src/AoC22/Day4/input.txt");
        Scanner sc = new Scanner(file);
        int result = 0;

        while (sc.hasNext()) {
            String[] chars1 = sc.nextLine().split(",");

            int number1 = Integer.parseInt(chars1[0].split("-")[0]);
            int number2 = Integer.parseInt(chars1[0].split("-")[1]);
            int number3 = Integer.parseInt(chars1[1].split("-")[0]);
            int number4 = Integer.parseInt(chars1[1].split("-")[1]);

            if (number1 <= number4 && number2 >= number3) {
                result++;
            }
        }
        System.out.println(result);
    }
}
