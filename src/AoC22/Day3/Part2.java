package AoC22.Day3;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class Part2 {
    public static void main(String[] args) throws FileNotFoundException {
        File file = new File("src/AoC22/Day3/input.txt");
        Scanner sc = new Scanner(file);
        int result = 0;

        while (sc.hasNext()) {
            char[] rucksack1 = sc.nextLine().toCharArray();
            char[] rucksack2 = sc.nextLine().toCharArray();
            char[] rucksack3 = sc.nextLine().toCharArray();
            char match = 0;

            for (char c1: rucksack1) {
                for (char c2: rucksack2) {
                    if (c1 == c2) {
                        for (char c3 : rucksack3) {
                            if (c2 == c3) {
                                match = c3;
                            }
                        }

                    }
                }
            }

            if (Character.isLowerCase(match)) {
                result += match - 96;
            } else {
                result += match - 64 + 26;
            }
        }
        System.out.println(result);
    }
}
