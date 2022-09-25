// Generated from Calc.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';



const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0002\b#\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0006\u0006\u0019\n\u0006",
    "\r\u0006\u000e\u0006\u001a\u0003\u0007\u0006\u0007\u001e\n\u0007\r\u0007",
    "\u000e\u0007\u001f\u0003\u0007\u0003\u0007\u0002\u0002\b\u0003\u0003",
    "\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u0003\u0002\u0004\u0003",
    "\u00022;\u0005\u0002\u000b\f\u000f\u000f\"\"\u0002$\u0002\u0003\u0003",
    "\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003",
    "\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003",
    "\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0003\u000f\u0003",
    "\u0002\u0002\u0002\u0005\u0011\u0003\u0002\u0002\u0002\u0007\u0013\u0003",
    "\u0002\u0002\u0002\t\u0015\u0003\u0002\u0002\u0002\u000b\u0018\u0003",
    "\u0002\u0002\u0002\r\u001d\u0003\u0002\u0002\u0002\u000f\u0010\u0007",
    ",\u0002\u0002\u0010\u0004\u0003\u0002\u0002\u0002\u0011\u0012\u0007",
    "1\u0002\u0002\u0012\u0006\u0003\u0002\u0002\u0002\u0013\u0014\u0007",
    "-\u0002\u0002\u0014\b\u0003\u0002\u0002\u0002\u0015\u0016\u0007/\u0002",
    "\u0002\u0016\n\u0003\u0002\u0002\u0002\u0017\u0019\t\u0002\u0002\u0002",
    "\u0018\u0017\u0003\u0002\u0002\u0002\u0019\u001a\u0003\u0002\u0002\u0002",
    "\u001a\u0018\u0003\u0002\u0002\u0002\u001a\u001b\u0003\u0002\u0002\u0002",
    "\u001b\f\u0003\u0002\u0002\u0002\u001c\u001e\t\u0003\u0002\u0002\u001d",
    "\u001c\u0003\u0002\u0002\u0002\u001e\u001f\u0003\u0002\u0002\u0002\u001f",
    "\u001d\u0003\u0002\u0002\u0002\u001f \u0003\u0002\u0002\u0002 !\u0003",
    "\u0002\u0002\u0002!\"\b\u0007\u0002\u0002\"\u000e\u0003\u0002\u0002",
    "\u0002\u0005\u0002\u001a\u001f\u0003\b\u0002\u0002"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class CalcLexer extends antlr4.Lexer {

    static grammarFileName = "Calc.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'*'", "'/'", "'+'", "'-'" ];
	static symbolicNames = [ null, "MUL", "DIV", "ADD", "SUB", "NUMBER", "WHITESPACE" ];
	static ruleNames = [ "MUL", "DIV", "ADD", "SUB", "NUMBER", "WHITESPACE" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

CalcLexer.EOF = antlr4.Token.EOF;
CalcLexer.MUL = 1;
CalcLexer.DIV = 2;
CalcLexer.ADD = 3;
CalcLexer.SUB = 4;
CalcLexer.NUMBER = 5;
CalcLexer.WHITESPACE = 6;



