package AoC22.Day1;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;

public class Part2 {
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
        int first = Collections.max(Elves);
        Elves.remove(Collections.max(Elves));
        int second = Collections.max(Elves);
        Elves.remove(Collections.max(Elves));
        int third = Collections.max(Elves);
        System.out.println(first + second + third);
    }
}
