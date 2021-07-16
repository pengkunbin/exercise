import antlr4 from "antlr4";
import util from "util";
import MyGrammarLexer from "./parser/LessLexer.js";
import MyGrammarParser from "./parser/LessParser.js";

const input = `
@primarycolor: #FF7F50;
@color: #800080;

h1 {
   color: @primarycolor;
}

h3 {
   color: @color;
}
`;
const chars = new antlr4.InputStream(input);
const lexer = new MyGrammarLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new MyGrammarParser(tokens);
parser.buildParseTrees = true;
const tree = parser.block().getText();

console.dir(util.inspect(tree));
