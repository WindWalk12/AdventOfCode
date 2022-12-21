package AoC22.Day6;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class Part1 {
    public static void main(String[] args) throws FileNotFoundException {
        File file = new File("src/AoC22/Day6/input.txt");
        Scanner sc = new Scanner(file);
        int result = 0;
        int markerSize = 4;

        char[] chars = sc.nextLine().toCharArray();

        for (int i = 0; i < chars.length; i++) {
            if (i == chars.length - markerSize) {
                break;
            }
            Set<Character> marker = new HashSet<>();
            for (int j = 0; j < markerSize; j++) {
                marker.add(chars[i + j]);
            }
            if (marker.size() == markerSize) {
                result = i + markerSize;
                break;
            }
        }

        System.out.println(result);
    }
}
