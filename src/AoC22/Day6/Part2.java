package AoC22.Day6;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class Part2 {
    public static void main(String[] args) throws FileNotFoundException {
        File file = new File("src/AoC22/Day6/input.txt");
        Scanner sc = new Scanner(file);
        int result = 0;
        int msgSize = 14;

        char[] chars = sc.nextLine().toCharArray();

        for (int i = 0; i < chars.length; i++) {
            if (i == chars.length - msgSize) {
                break;
            }
            Set<Character> marker = new HashSet<>();
            for (int j = 0; j < msgSize; j++) {
                marker.add(chars[i + j]);
            }
            if (marker.size() == msgSize) {
                result = i + msgSize;
                break;
            }
        }

        System.out.println(result);
    }
}
