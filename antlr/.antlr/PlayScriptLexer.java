// Generated from /Users/jizou/Documents/leetcode/antlr/Calc.g4 by ANTLR 4.8

package antlrtest;

import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class PlayScriptLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, T__19=20, T__20=21, T__21=22, T__22=23, T__23=24, 
		T__24=25, T__25=26;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
			"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16", 
			"T__17", "T__18", "T__19", "T__20", "T__21", "T__22", "T__23", "T__24", 
			"T__25"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'Number'", "'String'", "'var'", "';'", "','", "'='", "'*='", "'/='", 
			"'%='", "'+='", "'-='", "'<<='", "'>>='", "'>>>='", "'&='", "'^='", "'|='", 
			"'+'", "'-'", "'*'", "'/'", "'%'", "'('", "')'", "'{'", "'}'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public PlayScriptLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "Calc.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\34\u0086\b\1\4\2"+
		"\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4"+
		"\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22"+
		"\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31"+
		"\t\31\4\32\t\32\4\33\t\33\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\3\3\3\3\3\3\3"+
		"\3\3\3\3\3\3\3\4\3\4\3\4\3\4\3\5\3\5\3\6\3\6\3\7\3\7\3\b\3\b\3\b\3\t\3"+
		"\t\3\t\3\n\3\n\3\n\3\13\3\13\3\13\3\f\3\f\3\f\3\r\3\r\3\r\3\r\3\16\3\16"+
		"\3\16\3\16\3\17\3\17\3\17\3\17\3\17\3\20\3\20\3\20\3\21\3\21\3\21\3\22"+
		"\3\22\3\22\3\23\3\23\3\24\3\24\3\25\3\25\3\26\3\26\3\27\3\27\3\30\3\30"+
		"\3\31\3\31\3\32\3\32\3\33\3\33\2\2\34\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21"+
		"\n\23\13\25\f\27\r\31\16\33\17\35\20\37\21!\22#\23%\24\'\25)\26+\27-\30"+
		"/\31\61\32\63\33\65\34\3\2\2\2\u0085\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2"+
		"\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23"+
		"\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2"+
		"\2\2\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2\2\2\2)\3\2"+
		"\2\2\2+\3\2\2\2\2-\3\2\2\2\2/\3\2\2\2\2\61\3\2\2\2\2\63\3\2\2\2\2\65\3"+
		"\2\2\2\3\67\3\2\2\2\5>\3\2\2\2\7E\3\2\2\2\tI\3\2\2\2\13K\3\2\2\2\rM\3"+
		"\2\2\2\17O\3\2\2\2\21R\3\2\2\2\23U\3\2\2\2\25X\3\2\2\2\27[\3\2\2\2\31"+
		"^\3\2\2\2\33b\3\2\2\2\35f\3\2\2\2\37k\3\2\2\2!n\3\2\2\2#q\3\2\2\2%t\3"+
		"\2\2\2\'v\3\2\2\2)x\3\2\2\2+z\3\2\2\2-|\3\2\2\2/~\3\2\2\2\61\u0080\3\2"+
		"\2\2\63\u0082\3\2\2\2\65\u0084\3\2\2\2\678\7P\2\289\7w\2\29:\7o\2\2:;"+
		"\7d\2\2;<\7g\2\2<=\7t\2\2=\4\3\2\2\2>?\7U\2\2?@\7v\2\2@A\7t\2\2AB\7k\2"+
		"\2BC\7p\2\2CD\7i\2\2D\6\3\2\2\2EF\7x\2\2FG\7c\2\2GH\7t\2\2H\b\3\2\2\2"+
		"IJ\7=\2\2J\n\3\2\2\2KL\7.\2\2L\f\3\2\2\2MN\7?\2\2N\16\3\2\2\2OP\7,\2\2"+
		"PQ\7?\2\2Q\20\3\2\2\2RS\7\61\2\2ST\7?\2\2T\22\3\2\2\2UV\7\'\2\2VW\7?\2"+
		"\2W\24\3\2\2\2XY\7-\2\2YZ\7?\2\2Z\26\3\2\2\2[\\\7/\2\2\\]\7?\2\2]\30\3"+
		"\2\2\2^_\7>\2\2_`\7>\2\2`a\7?\2\2a\32\3\2\2\2bc\7@\2\2cd\7@\2\2de\7?\2"+
		"\2e\34\3\2\2\2fg\7@\2\2gh\7@\2\2hi\7@\2\2ij\7?\2\2j\36\3\2\2\2kl\7(\2"+
		"\2lm\7?\2\2m \3\2\2\2no\7`\2\2op\7?\2\2p\"\3\2\2\2qr\7~\2\2rs\7?\2\2s"+
		"$\3\2\2\2tu\7-\2\2u&\3\2\2\2vw\7/\2\2w(\3\2\2\2xy\7,\2\2y*\3\2\2\2z{\7"+
		"\61\2\2{,\3\2\2\2|}\7\'\2\2}.\3\2\2\2~\177\7*\2\2\177\60\3\2\2\2\u0080"+
		"\u0081\7+\2\2\u0081\62\3\2\2\2\u0082\u0083\7}\2\2\u0083\64\3\2\2\2\u0084"+
		"\u0085\7\177\2\2\u0085\66\3\2\2\2\3\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}