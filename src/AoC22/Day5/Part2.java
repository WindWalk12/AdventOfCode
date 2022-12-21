package AoC22.Day5;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;
import java.util.Stack;

public class Part2 {
    public static void main(String[] args) throws FileNotFoundException {
        File file = new File("src/AoC22/Day5/input.txt");
        Scanner sc = new Scanner(file);
        StringBuilder result = new StringBuilder();
        Stack<Character>[] spaces = new Stack[9];
        for (int i = 0; i < spaces.length; i++) {
            spaces[i] = new Stack<>();
        }

        //Hard coded the start
        //1
        spaces[0].push('Z');
        spaces[0].push('J');
        spaces[0].push('G');
        //2
        spaces[1].push('Q');
        spaces[1].push('L');
        spaces[1].push('R');
        spaces[1].push('P');
        spaces[1].push('W');
        spaces[1].push('F');
        spaces[1].push('V');
        spaces[1].push('C');
        //3
        spaces[2].push('F');
        spaces[2].push('P');
        spaces[2].push('M');
        spaces[2].push('C');
        spaces[2].push('L');
        spaces[2].push('G');
        spaces[2].push('R');
        //4
        spaces[3].push('L');
        spaces[3].push('F');
        spaces[3].push('B');
        spaces[3].push('W');
        spaces[3].push('P');
        spaces[3].push('H');
        spaces[3].push('M');
        //5
        spaces[4].push('G');
        spaces[4].push('C');
        spaces[4].push('F');
        spaces[4].push('S');
        spaces[4].push('V');
        spaces[4].push('Q');
        //6
        spaces[5].push('W');
        spaces[5].push('H');
        spaces[5].push('J');
        spaces[5].push('Z');
        spaces[5].push('M');
        spaces[5].push('Q');
        spaces[5].push('T');
        spaces[5].push('L');
        //7
        spaces[6].push('H');
        spaces[6].push('F');
        spaces[6].push('S');
        spaces[6].push('B');
        spaces[6].push('V');
        //8
        spaces[7].push('F');
        spaces[7].push('J');
        spaces[7].push('Z');
        spaces[7].push('S');
        //9
        spaces[8].push('M');
        spaces[8].push('C');
        spaces[8].push('D');
        spaces[8].push('P');
        spaces[8].push('F');
        spaces[8].push('H');
        spaces[8].push('B');
        spaces[8].push('T');

        while (sc.hasNext()) {
            String[] strings = sc.nextLine().split(" ");
            int moves = Integer.parseInt(strings[1]);
            int fromSpace = Integer.parseInt(strings[3]) - 1;
            int toSpace = Integer.parseInt(strings[5]) - 1;
            if (moves == 1) {
                char crate = spaces[fromSpace].peek();
                spaces[fromSpace].pop();
                spaces[toSpace].push(crate);
            } else {
                Stack<Character> crane = new Stack<>();
                for (int i = 0; i < moves; i++) {
                    char crate = spaces[fromSpace].peek();
                    spaces[fromSpace].pop();
                    crane.push(crate);
                }
                for (int i = 0; i < moves; i++) {
                    char crate = crane.peek();
                    crane.pop();
                    spaces[toSpace].push(crate);
                }
            }
        }

        for (Stack<Character> space : spaces) {
            result.append(space.peek());
        }
        System.out.println(result);
    }
}
