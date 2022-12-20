package AoC22.Day2;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

//A = Rock
//B = Paper
//C = Scissors
//X = Rock 1 point
//Y = Paper 2 points
//Z = Scissors 3 points

public class Part1 {
    public static void main(String[] args) throws FileNotFoundException {
        File file = new File("src/AoC22/Day2/input.txt");
        Scanner sc = new Scanner(file);
        int result = 0;

        while (sc.hasNext()) {
            String[] chars = sc.nextLine().split(" ");

            if ((chars[0].equals("A") && chars[1].equals("Y")) || (chars[0].equals("B") && chars[1].equals("Z")) || (chars[0].equals("C") && chars[1].equals("X"))) {
                if (chars[1].equals("X")) {
                    result += 7;
                } else if (chars[1].equals("Y")) {
                    result += 8;
                } else {
                    result += 9;
                }
            } else if ((chars[0].equals("A") && chars[1].equals("X")) || (chars[0].equals("B") && chars[1].equals("Y")) || (chars[0].equals("C") && chars[1].equals("Z"))) {
                if (chars[1].equals("X")) {
                    result += 4;
                } else if (chars[1].equals("Y")) {
                    result += 5;
                } else {
                    result += 6;
                }
            } else {
                if (chars[1].equals("X")) {
                    result += 1;
                } else if (chars[1].equals("Y")) {
                    result += 2;
                } else {
                    result += 3;
                }
            }
        }
        System.out.println(result);
    }
}
