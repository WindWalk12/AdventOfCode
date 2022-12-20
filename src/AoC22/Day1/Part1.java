package AoC22.Day1;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;

public class Part1 {
    public static void main(String[] args) throws FileNotFoundException {
        File file = new File("src/AoC22/Day1/input.txt");
        Scanner sc = new Scanner(file);
        int result = 0;
        ArrayList<Integer> Elves = new ArrayList<>();

        while (sc.hasNext()) {
            String chars = sc.nextLine();
            if (chars.equals("")) {
                Elves.add(result);
                result = 0;
            } else {
                result += Integer.parseInt(chars);
            }
        }
        System.out.println(Collections.max(Elves));
    }
}
