package Day2;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

//A = Rock
//B = Paper
//C = Scissors
//X = Rock 1 point
//Y = Paper 2 point
//Z = Scissors 3 point

public class Part2 {
    public static void main(String[] args) throws FileNotFoundException {
        File file = new File("src/Day2/input.txt");
        Scanner sc = new Scanner(file);
        int result = 0;

        while (sc.hasNext()) {
            String[] chars = sc.nextLine().split(" ");

            if (chars[1].equals("Z")) {
                if (chars[0].equals("A")) {
                    result += 8;
                } else if (chars[0].equals("B")) {
                    result += 9;
                } else {
                    result += 7;
                }
            } else if (chars[1].equals("Y")) {
                if (chars[0].equals("A")) {
                    result += 4;
                } else if (chars[0].equals("B")) {
                    result += 5;
                } else {
                    result += 6;
                }
            } else {
                if (chars[0].equals("A")) {
                    result += 3;
                } else if (chars[0].equals("B")) {
                    result += 1;
                } else {
                    result += 2;
                }
            }
        }
        System.out.println(result);
    }
}
