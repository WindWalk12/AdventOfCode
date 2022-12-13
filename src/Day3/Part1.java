package Day3;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class Part1 {
    public static void main(String[] args) throws FileNotFoundException {
        File file = new File("src/Day3/input.txt");
        Scanner sc = new Scanner(file);
        int result = 0;

        while (sc.hasNext()) {
            String chars = sc.nextLine();
            char[] comp1 = chars.substring(0, chars.length()/2).toCharArray();
            char[] comp2 = chars.substring(chars.length()/2).toCharArray();
            char match = 0;

            for (char c1: comp1) {
                for (char c2: comp2) {
                    if (c1 == c2) {
                        match = c1;
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
