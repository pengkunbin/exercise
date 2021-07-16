// Generated from /Users/jizou/Documents/leetcode/antlr/abbLexer.g4 by ANTLR 4.8
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class abbLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		MODULE=1, ENDMODULE=2, PROC=3, ENDPROC=4, LOCAL=5, CONST=6, PERS=7, VAR=8, 
		TOOLDATA=9, WOBJDATA=10, SPEEDDATA=11, ZONEDATA=12, CLOCK=13, BOOL=14, 
		ON_CALL=15, OFF_CALL=16, SLASH=17, EQUALS=18, COMMA=19, CURLY_OPEN=20, 
		CURLY_CLOSE=21, COLON=22, SEMICOLON=23, BRACKET_OPEN=24, BRACKET_CLOSE=25, 
		SQUARE_OPEN=26, SQUARE_CLOSE=27, DOT=28, DOUBLEDOT=29, REL_BIGGER=30, 
		REL_BIGGER_OR_EQUAL=31, REL_SMALLER=32, REL_SMALLER_OR_EQUAL=33, REL_EQUAL=34, 
		REL_NOTEQUAL=35, PLUS=36, MINUS=37, MULTIPLY=38, PERCENT=39, HASH=40, 
		WS=41, NEWLINE=42, LINE_COMMENT=43, BOOLLITERAL=44, CHARLITERAL=45, STRINGLITERAL=46, 
		FLOATLITERAL=47, INTLITERAL=48, IDENTIFIER=49;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"MODULE", "ENDMODULE", "PROC", "ENDPROC", "LOCAL", "CONST", "PERS", "VAR", 
			"TOOLDATA", "WOBJDATA", "SPEEDDATA", "ZONEDATA", "CLOCK", "BOOL", "ON_CALL", 
			"OFF_CALL", "SLASH", "EQUALS", "COMMA", "CURLY_OPEN", "CURLY_CLOSE", 
			"COLON", "SEMICOLON", "BRACKET_OPEN", "BRACKET_CLOSE", "SQUARE_OPEN", 
			"SQUARE_CLOSE", "DOT", "DOUBLEDOT", "REL_BIGGER", "REL_BIGGER_OR_EQUAL", 
			"REL_SMALLER", "REL_SMALLER_OR_EQUAL", "REL_EQUAL", "REL_NOTEQUAL", "PLUS", 
			"MINUS", "MULTIPLY", "PERCENT", "HASH", "A", "B", "C", "D", "E", "F", 
			"G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", 
			"U", "V", "W", "X", "Y", "Z", "WS", "NEWLINE", "LINE_COMMENT", "BOOLLITERAL", 
			"CHARLITERAL", "STRINGLITERAL", "EscapeSequence", "FLOATLITERAL", "Exponent", 
			"INTLITERAL", "HexPrefix", "HexDigit", "HexSuffix", "BinPrefix", "BinDigit", 
			"BinSuffix", "IDENTIFIER", "IdentifierStart", "IdentifierPart"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'module'", "'endmodule'", null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, "'/'", "':='", "','", 
			"'{'", "'}'", "':'", "';'", "'('", "')'", "'['", "']'", "'.'", "'..'", 
			"'>'", "'>='", "'<'", "'<='", "'=='", "'<>'", "'+'", "'-'", "'*'", "'%'", 
			"'#'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "MODULE", "ENDMODULE", "PROC", "ENDPROC", "LOCAL", "CONST", "PERS", 
			"VAR", "TOOLDATA", "WOBJDATA", "SPEEDDATA", "ZONEDATA", "CLOCK", "BOOL", 
			"ON_CALL", "OFF_CALL", "SLASH", "EQUALS", "COMMA", "CURLY_OPEN", "CURLY_CLOSE", 
			"COLON", "SEMICOLON", "BRACKET_OPEN", "BRACKET_CLOSE", "SQUARE_OPEN", 
			"SQUARE_CLOSE", "DOT", "DOUBLEDOT", "REL_BIGGER", "REL_BIGGER_OR_EQUAL", 
			"REL_SMALLER", "REL_SMALLER_OR_EQUAL", "REL_EQUAL", "REL_NOTEQUAL", "PLUS", 
			"MINUS", "MULTIPLY", "PERCENT", "HASH", "WS", "NEWLINE", "LINE_COMMENT", 
			"BOOLLITERAL", "CHARLITERAL", "STRINGLITERAL", "FLOATLITERAL", "INTLITERAL", 
			"IDENTIFIER"
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


	public abbLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "abbLexer.g4"; }

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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\63\u0218\b\1\4\2"+
		"\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4"+
		"\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22"+
		"\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31"+
		"\t\31\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t"+
		" \4!\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t"+
		"+\4,\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64"+
		"\t\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t"+
		"=\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C\tC\4D\tD\4E\tE\4F\tF\4G\tG\4H\tH\4"+
		"I\tI\4J\tJ\4K\tK\4L\tL\4M\tM\4N\tN\4O\tO\4P\tP\4Q\tQ\4R\tR\4S\tS\4T\t"+
		"T\4U\tU\4V\tV\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\3\3\3"+
		"\3\3\3\3\3\3\3\4\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\6\3"+
		"\6\3\6\3\6\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\t\3\t"+
		"\3\t\3\t\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\13\3\13\3\13\3\13\3\13"+
		"\3\13\3\13\3\13\3\13\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\r\3\r\3"+
		"\r\3\r\3\r\3\r\3\r\3\r\3\r\3\16\3\16\3\16\3\16\3\16\3\16\3\17\3\17\3\17"+
		"\3\17\3\17\3\20\3\20\3\20\3\20\3\21\3\21\3\21\3\21\3\21\3\22\3\22\3\23"+
		"\3\23\3\23\3\24\3\24\3\25\3\25\3\26\3\26\3\27\3\27\3\30\3\30\3\31\3\31"+
		"\3\32\3\32\3\33\3\33\3\34\3\34\3\35\3\35\3\36\3\36\3\36\3\37\3\37\3 \3"+
		" \3 \3!\3!\3\"\3\"\3\"\3#\3#\3#\3$\3$\3$\3%\3%\3&\3&\3\'\3\'\3(\3(\3)"+
		"\3)\3*\3*\3+\3+\3,\3,\3-\3-\3.\3.\3/\3/\3\60\3\60\3\61\3\61\3\62\3\62"+
		"\3\63\3\63\3\64\3\64\3\65\3\65\3\66\3\66\3\67\3\67\38\38\39\39\3:\3:\3"+
		";\3;\3<\3<\3=\3=\3>\3>\3?\3?\3@\3@\3A\3A\3B\3B\3C\3C\3D\3D\3D\3D\3E\5"+
		"E\u0189\nE\3E\3E\3F\3F\7F\u018f\nF\fF\16F\u0192\13F\3F\3F\3G\3G\3G\3G"+
		"\3G\3G\3G\3G\3G\3G\3G\5G\u01a1\nG\3H\3H\3H\5H\u01a6\nH\3H\3H\3I\3I\3I"+
		"\7I\u01ad\nI\fI\16I\u01b0\13I\3I\3I\3J\3J\3J\3J\3J\3J\3J\3J\5J\u01bc\n"+
		"J\3K\6K\u01bf\nK\rK\16K\u01c0\3K\3K\7K\u01c5\nK\fK\16K\u01c8\13K\3K\5"+
		"K\u01cb\nK\3K\3K\6K\u01cf\nK\rK\16K\u01d0\3K\5K\u01d4\nK\3K\6K\u01d7\n"+
		"K\rK\16K\u01d8\3K\5K\u01dc\nK\3L\3L\5L\u01e0\nL\3L\6L\u01e3\nL\rL\16L"+
		"\u01e4\3M\6M\u01e8\nM\rM\16M\u01e9\3M\3M\6M\u01ee\nM\rM\16M\u01ef\3M\3"+
		"M\3M\3M\6M\u01f6\nM\rM\16M\u01f7\3M\3M\5M\u01fc\nM\3N\3N\3N\3O\3O\3P\3"+
		"P\3Q\3Q\3Q\3R\3R\3S\3S\3T\3T\7T\u020e\nT\fT\16T\u0211\13T\3U\3U\3V\3V"+
		"\5V\u0217\nV\2\2W\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25\f\27\r\31"+
		"\16\33\17\35\20\37\21!\22#\23%\24\'\25)\26+\27-\30/\31\61\32\63\33\65"+
		"\34\67\359\36;\37= ?!A\"C#E$G%I&K\'M(O)Q*S\2U\2W\2Y\2[\2]\2_\2a\2c\2e"+
		"\2g\2i\2k\2m\2o\2q\2s\2u\2w\2y\2{\2}\2\177\2\u0081\2\u0083\2\u0085\2\u0087"+
		"+\u0089,\u008b-\u008d.\u008f/\u0091\60\u0093\2\u0095\61\u0097\2\u0099"+
		"\62\u009b\2\u009d\2\u009f\2\u00a1\2\u00a3\2\u00a5\2\u00a7\63\u00a9\2\u00ab"+
		"\2\3\2$\4\2CCcc\4\2DDdd\4\2EEee\4\2FFff\4\2GGgg\4\2HHhh\4\2IIii\4\2JJ"+
		"jj\4\2KKkk\4\2LLll\4\2MMmm\4\2NNnn\4\2OOoo\4\2PPpp\4\2QQqq\4\2RRrr\4\2"+
		"SSss\4\2TTtt\4\2UUuu\4\2VVvv\4\2WWww\4\2XXxx\4\2YYyy\4\2ZZzz\4\2[[{{\4"+
		"\2\\\\||\5\2\13\13\16\16\"\"\4\2\f\f\17\17\6\2\f\f\17\17))^^\6\2\f\f\17"+
		"\17$$^^\n\2$$))^^ddhhppttvv\4\2--//\5\2\62;CHch\5\2C\\aac|\2\u020d\2\3"+
		"\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2"+
		"\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31"+
		"\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2"+
		"\2%\3\2\2\2\2\'\3\2\2\2\2)\3\2\2\2\2+\3\2\2\2\2-\3\2\2\2\2/\3\2\2\2\2"+
		"\61\3\2\2\2\2\63\3\2\2\2\2\65\3\2\2\2\2\67\3\2\2\2\29\3\2\2\2\2;\3\2\2"+
		"\2\2=\3\2\2\2\2?\3\2\2\2\2A\3\2\2\2\2C\3\2\2\2\2E\3\2\2\2\2G\3\2\2\2\2"+
		"I\3\2\2\2\2K\3\2\2\2\2M\3\2\2\2\2O\3\2\2\2\2Q\3\2\2\2\2\u0087\3\2\2\2"+
		"\2\u0089\3\2\2\2\2\u008b\3\2\2\2\2\u008d\3\2\2\2\2\u008f\3\2\2\2\2\u0091"+
		"\3\2\2\2\2\u0095\3\2\2\2\2\u0099\3\2\2\2\2\u00a7\3\2\2\2\3\u00ad\3\2\2"+
		"\2\5\u00b4\3\2\2\2\7\u00be\3\2\2\2\t\u00c3\3\2\2\2\13\u00cb\3\2\2\2\r"+
		"\u00d1\3\2\2\2\17\u00d7\3\2\2\2\21\u00dc\3\2\2\2\23\u00e0\3\2\2\2\25\u00e9"+
		"\3\2\2\2\27\u00f2\3\2\2\2\31\u00fc\3\2\2\2\33\u0105\3\2\2\2\35\u010b\3"+
		"\2\2\2\37\u0110\3\2\2\2!\u0114\3\2\2\2#\u0119\3\2\2\2%\u011b\3\2\2\2\'"+
		"\u011e\3\2\2\2)\u0120\3\2\2\2+\u0122\3\2\2\2-\u0124\3\2\2\2/\u0126\3\2"+
		"\2\2\61\u0128\3\2\2\2\63\u012a\3\2\2\2\65\u012c\3\2\2\2\67\u012e\3\2\2"+
		"\29\u0130\3\2\2\2;\u0132\3\2\2\2=\u0135\3\2\2\2?\u0137\3\2\2\2A\u013a"+
		"\3\2\2\2C\u013c\3\2\2\2E\u013f\3\2\2\2G\u0142\3\2\2\2I\u0145\3\2\2\2K"+
		"\u0147\3\2\2\2M\u0149\3\2\2\2O\u014b\3\2\2\2Q\u014d\3\2\2\2S\u014f\3\2"+
		"\2\2U\u0151\3\2\2\2W\u0153\3\2\2\2Y\u0155\3\2\2\2[\u0157\3\2\2\2]\u0159"+
		"\3\2\2\2_\u015b\3\2\2\2a\u015d\3\2\2\2c\u015f\3\2\2\2e\u0161\3\2\2\2g"+
		"\u0163\3\2\2\2i\u0165\3\2\2\2k\u0167\3\2\2\2m\u0169\3\2\2\2o\u016b\3\2"+
		"\2\2q\u016d\3\2\2\2s\u016f\3\2\2\2u\u0171\3\2\2\2w\u0173\3\2\2\2y\u0175"+
		"\3\2\2\2{\u0177\3\2\2\2}\u0179\3\2\2\2\177\u017b\3\2\2\2\u0081\u017d\3"+
		"\2\2\2\u0083\u017f\3\2\2\2\u0085\u0181\3\2\2\2\u0087\u0183\3\2\2\2\u0089"+
		"\u0188\3\2\2\2\u008b\u018c\3\2\2\2\u008d\u01a0\3\2\2\2\u008f\u01a2\3\2"+
		"\2\2\u0091\u01a9\3\2\2\2\u0093\u01b3\3\2\2\2\u0095\u01db\3\2\2\2\u0097"+
		"\u01dd\3\2\2\2\u0099\u01fb\3\2\2\2\u009b\u01fd\3\2\2\2\u009d\u0200\3\2"+
		"\2\2\u009f\u0202\3\2\2\2\u00a1\u0204\3\2\2\2\u00a3\u0207\3\2\2\2\u00a5"+
		"\u0209\3\2\2\2\u00a7\u020b\3\2\2\2\u00a9\u0212\3\2\2\2\u00ab\u0216\3\2"+
		"\2\2\u00ad\u00ae\7o\2\2\u00ae\u00af\7q\2\2\u00af\u00b0\7f\2\2\u00b0\u00b1"+
		"\7w\2\2\u00b1\u00b2\7n\2\2\u00b2\u00b3\7g\2\2\u00b3\4\3\2\2\2\u00b4\u00b5"+
		"\7g\2\2\u00b5\u00b6\7p\2\2\u00b6\u00b7\7f\2\2\u00b7\u00b8\7o\2\2\u00b8"+
		"\u00b9\7q\2\2\u00b9\u00ba\7f\2\2\u00ba\u00bb\7w\2\2\u00bb\u00bc\7n\2\2"+
		"\u00bc\u00bd\7g\2\2\u00bd\6\3\2\2\2\u00be\u00bf\5q9\2\u00bf\u00c0\5u;"+
		"\2\u00c0\u00c1\5o8\2\u00c1\u00c2\5W,\2\u00c2\b\3\2\2\2\u00c3\u00c4\5["+
		".\2\u00c4\u00c5\5m\67\2\u00c5\u00c6\5Y-\2\u00c6\u00c7\5q9\2\u00c7\u00c8"+
		"\5u;\2\u00c8\u00c9\5o8\2\u00c9\u00ca\5W,\2\u00ca\n\3\2\2\2\u00cb\u00cc"+
		"\5i\65\2\u00cc\u00cd\5o8\2\u00cd\u00ce\5W,\2\u00ce\u00cf\5S*\2\u00cf\u00d0"+
		"\5i\65\2\u00d0\f\3\2\2\2\u00d1\u00d2\5W,\2\u00d2\u00d3\5o8\2\u00d3\u00d4"+
		"\5m\67\2\u00d4\u00d5\5w<\2\u00d5\u00d6\5y=\2\u00d6\16\3\2\2\2\u00d7\u00d8"+
		"\5q9\2\u00d8\u00d9\5[.\2\u00d9\u00da\5u;\2\u00da\u00db\5w<\2\u00db\20"+
		"\3\2\2\2\u00dc\u00dd\5}?\2\u00dd\u00de\5S*\2\u00de\u00df\5u;\2\u00df\22"+
		"\3\2\2\2\u00e0\u00e1\5y=\2\u00e1\u00e2\5o8\2\u00e2\u00e3\5o8\2\u00e3\u00e4"+
		"\5i\65\2\u00e4\u00e5\5Y-\2\u00e5\u00e6\5S*\2\u00e6\u00e7\5y=\2\u00e7\u00e8"+
		"\5S*\2\u00e8\24\3\2\2\2\u00e9\u00ea\5\177@\2\u00ea\u00eb\5o8\2\u00eb\u00ec"+
		"\5U+\2\u00ec\u00ed\5e\63\2\u00ed\u00ee\5Y-\2\u00ee\u00ef\5S*\2\u00ef\u00f0"+
		"\5y=\2\u00f0\u00f1\5S*\2\u00f1\26\3\2\2\2\u00f2\u00f3\5w<\2\u00f3\u00f4"+
		"\5q9\2\u00f4\u00f5\5[.\2\u00f5\u00f6\5[.\2\u00f6\u00f7\5Y-\2\u00f7\u00f8"+
		"\5Y-\2\u00f8\u00f9\5S*\2\u00f9\u00fa\5y=\2\u00fa\u00fb\5S*\2\u00fb\30"+
		"\3\2\2\2\u00fc\u00fd\5\u0085C\2\u00fd\u00fe\5o8\2\u00fe\u00ff\5m\67\2"+
		"\u00ff\u0100\5[.\2\u0100\u0101\5Y-\2\u0101\u0102\5S*\2\u0102\u0103\5y"+
		"=\2\u0103\u0104\5S*\2\u0104\32\3\2\2\2\u0105\u0106\5W,\2\u0106\u0107\5"+
		"i\65\2\u0107\u0108\5o8\2\u0108\u0109\5W,\2\u0109\u010a\5g\64\2\u010a\34"+
		"\3\2\2\2\u010b\u010c\5U+\2\u010c\u010d\5o8\2\u010d\u010e\5o8\2\u010e\u010f"+
		"\5i\65\2\u010f\36\3\2\2\2\u0110\u0111\7^\2\2\u0111\u0112\5o8\2\u0112\u0113"+
		"\5m\67\2\u0113 \3\2\2\2\u0114\u0115\7^\2\2\u0115\u0116\5o8\2\u0116\u0117"+
		"\5]/\2\u0117\u0118\5]/\2\u0118\"\3\2\2\2\u0119\u011a\7\61\2\2\u011a$\3"+
		"\2\2\2\u011b\u011c\7<\2\2\u011c\u011d\7?\2\2\u011d&\3\2\2\2\u011e\u011f"+
		"\7.\2\2\u011f(\3\2\2\2\u0120\u0121\7}\2\2\u0121*\3\2\2\2\u0122\u0123\7"+
		"\177\2\2\u0123,\3\2\2\2\u0124\u0125\7<\2\2\u0125.\3\2\2\2\u0126\u0127"+
		"\7=\2\2\u0127\60\3\2\2\2\u0128\u0129\7*\2\2\u0129\62\3\2\2\2\u012a\u012b"+
		"\7+\2\2\u012b\64\3\2\2\2\u012c\u012d\7]\2\2\u012d\66\3\2\2\2\u012e\u012f"+
		"\7_\2\2\u012f8\3\2\2\2\u0130\u0131\7\60\2\2\u0131:\3\2\2\2\u0132\u0133"+
		"\7\60\2\2\u0133\u0134\7\60\2\2\u0134<\3\2\2\2\u0135\u0136\7@\2\2\u0136"+
		">\3\2\2\2\u0137\u0138\7@\2\2\u0138\u0139\7?\2\2\u0139@\3\2\2\2\u013a\u013b"+
		"\7>\2\2\u013bB\3\2\2\2\u013c\u013d\7>\2\2\u013d\u013e\7?\2\2\u013eD\3"+
		"\2\2\2\u013f\u0140\7?\2\2\u0140\u0141\7?\2\2\u0141F\3\2\2\2\u0142\u0143"+
		"\7>\2\2\u0143\u0144\7@\2\2\u0144H\3\2\2\2\u0145\u0146\7-\2\2\u0146J\3"+
		"\2\2\2\u0147\u0148\7/\2\2\u0148L\3\2\2\2\u0149\u014a\7,\2\2\u014aN\3\2"+
		"\2\2\u014b\u014c\7\'\2\2\u014cP\3\2\2\2\u014d\u014e\7%\2\2\u014eR\3\2"+
		"\2\2\u014f\u0150\t\2\2\2\u0150T\3\2\2\2\u0151\u0152\t\3\2\2\u0152V\3\2"+
		"\2\2\u0153\u0154\t\4\2\2\u0154X\3\2\2\2\u0155\u0156\t\5\2\2\u0156Z\3\2"+
		"\2\2\u0157\u0158\t\6\2\2\u0158\\\3\2\2\2\u0159\u015a\t\7\2\2\u015a^\3"+
		"\2\2\2\u015b\u015c\t\b\2\2\u015c`\3\2\2\2\u015d\u015e\t\t\2\2\u015eb\3"+
		"\2\2\2\u015f\u0160\t\n\2\2\u0160d\3\2\2\2\u0161\u0162\t\13\2\2\u0162f"+
		"\3\2\2\2\u0163\u0164\t\f\2\2\u0164h\3\2\2\2\u0165\u0166\t\r\2\2\u0166"+
		"j\3\2\2\2\u0167\u0168\t\16\2\2\u0168l\3\2\2\2\u0169\u016a\t\17\2\2\u016a"+
		"n\3\2\2\2\u016b\u016c\t\20\2\2\u016cp\3\2\2\2\u016d\u016e\t\21\2\2\u016e"+
		"r\3\2\2\2\u016f\u0170\t\22\2\2\u0170t\3\2\2\2\u0171\u0172\t\23\2\2\u0172"+
		"v\3\2\2\2\u0173\u0174\t\24\2\2\u0174x\3\2\2\2\u0175\u0176\t\25\2\2\u0176"+
		"z\3\2\2\2\u0177\u0178\t\26\2\2\u0178|\3\2\2\2\u0179\u017a\t\27\2\2\u017a"+
		"~\3\2\2\2\u017b\u017c\t\30\2\2\u017c\u0080\3\2\2\2\u017d\u017e\t\31\2"+
		"\2\u017e\u0082\3\2\2\2\u017f\u0180\t\32\2\2\u0180\u0084\3\2\2\2\u0181"+
		"\u0182\t\33\2\2\u0182\u0086\3\2\2\2\u0183\u0184\t\34\2\2\u0184\u0185\3"+
		"\2\2\2\u0185\u0186\bD\2\2\u0186\u0088\3\2\2\2\u0187\u0189\7\17\2\2\u0188"+
		"\u0187\3\2\2\2\u0188\u0189\3\2\2\2\u0189\u018a\3\2\2\2\u018a\u018b\7\f"+
		"\2\2\u018b\u008a\3\2\2\2\u018c\u0190\7#\2\2\u018d\u018f\n\35\2\2\u018e"+
		"\u018d\3\2\2\2\u018f\u0192\3\2\2\2\u0190\u018e\3\2\2\2\u0190\u0191\3\2"+
		"\2\2\u0191\u0193\3\2\2\2\u0192\u0190\3\2\2\2\u0193\u0194\bF\2\2\u0194"+
		"\u008c\3\2\2\2\u0195\u0196\5]/\2\u0196\u0197\5S*\2\u0197\u0198\5i\65\2"+
		"\u0198\u0199\5w<\2\u0199\u019a\5[.\2\u019a\u01a1\3\2\2\2\u019b\u019c\5"+
		"y=\2\u019c\u019d\5u;\2\u019d\u019e\5{>\2\u019e\u019f\5[.\2\u019f\u01a1"+
		"\3\2\2\2\u01a0\u0195\3\2\2\2\u01a0\u019b\3\2\2\2\u01a1\u008e\3\2\2\2\u01a2"+
		"\u01a5\7)\2\2\u01a3\u01a6\5\u0093J\2\u01a4\u01a6\n\36\2\2\u01a5\u01a3"+
		"\3\2\2\2\u01a5\u01a4\3\2\2\2\u01a6\u01a7\3\2\2\2\u01a7\u01a8\7)\2\2\u01a8"+
		"\u0090\3\2\2\2\u01a9\u01ae\7$\2\2\u01aa\u01ad\5\u0093J\2\u01ab\u01ad\n"+
		"\37\2\2\u01ac\u01aa\3\2\2\2\u01ac\u01ab\3\2\2\2\u01ad\u01b0\3\2\2\2\u01ae"+
		"\u01ac\3\2\2\2\u01ae\u01af\3\2\2\2\u01af\u01b1\3\2\2\2\u01b0\u01ae\3\2"+
		"\2\2\u01b1\u01b2\7$\2\2\u01b2\u0092\3\2\2\2\u01b3\u01bb\7^\2\2\u01b4\u01bc"+
		"\t \2\2\u01b5\u01b6\4\62\65\2\u01b6\u01b7\4\629\2\u01b7\u01bc\4\629\2"+
		"\u01b8\u01b9\4\629\2\u01b9\u01bc\4\629\2\u01ba\u01bc\4\629\2\u01bb\u01b4"+
		"\3\2\2\2\u01bb\u01b5\3\2\2\2\u01bb\u01b8\3\2\2\2\u01bb\u01ba\3\2\2\2\u01bc"+
		"\u0094\3\2\2\2\u01bd\u01bf\4\62;\2\u01be\u01bd\3\2\2\2\u01bf\u01c0\3\2"+
		"\2\2\u01c0\u01be\3\2\2\2\u01c0\u01c1\3\2\2\2\u01c1\u01c2\3\2\2\2\u01c2"+
		"\u01c6\7\60\2\2\u01c3\u01c5\4\62;\2\u01c4\u01c3\3\2\2\2\u01c5\u01c8\3"+
		"\2\2\2\u01c6\u01c4\3\2\2\2\u01c6\u01c7\3\2\2\2\u01c7\u01ca\3\2\2\2\u01c8"+
		"\u01c6\3\2\2\2\u01c9\u01cb\5\u0097L\2\u01ca\u01c9\3\2\2\2\u01ca\u01cb"+
		"\3\2\2\2\u01cb\u01dc\3\2\2\2\u01cc\u01ce\7\60\2\2\u01cd\u01cf\4\62;\2"+
		"\u01ce\u01cd\3\2\2\2\u01cf\u01d0\3\2\2\2\u01d0\u01ce\3\2\2\2\u01d0\u01d1"+
		"\3\2\2\2\u01d1\u01d3\3\2\2\2\u01d2\u01d4\5\u0097L\2\u01d3\u01d2\3\2\2"+
		"\2\u01d3\u01d4\3\2\2\2\u01d4\u01dc\3\2\2\2\u01d5\u01d7\4\62;\2\u01d6\u01d5"+
		"\3\2\2\2\u01d7\u01d8\3\2\2\2\u01d8\u01d6\3\2\2\2\u01d8\u01d9\3\2\2\2\u01d9"+
		"\u01da\3\2\2\2\u01da\u01dc\5\u0097L\2\u01db\u01be\3\2\2\2\u01db\u01cc"+
		"\3\2\2\2\u01db\u01d6\3\2\2\2\u01dc\u0096\3\2\2\2\u01dd\u01df\5[.\2\u01de"+
		"\u01e0\t!\2\2\u01df\u01de\3\2\2\2\u01df\u01e0\3\2\2\2\u01e0\u01e2\3\2"+
		"\2\2\u01e1\u01e3\4\62;\2\u01e2\u01e1\3\2\2\2\u01e3\u01e4\3\2\2\2\u01e4"+
		"\u01e2\3\2\2\2\u01e4\u01e5\3\2\2\2\u01e5\u0098\3\2\2\2\u01e6\u01e8\4\62"+
		";\2\u01e7\u01e6\3\2\2\2\u01e8\u01e9\3\2\2\2\u01e9\u01e7\3\2\2\2\u01e9"+
		"\u01ea\3\2\2\2\u01ea\u01fc\3\2\2\2\u01eb\u01ed\5\u009bN\2\u01ec\u01ee"+
		"\5\u009dO\2\u01ed\u01ec\3\2\2\2\u01ee\u01ef\3\2\2\2\u01ef\u01ed\3\2\2"+
		"\2\u01ef\u01f0\3\2\2\2\u01f0\u01f1\3\2\2\2\u01f1\u01f2\5\u009fP\2\u01f2"+
		"\u01fc\3\2\2\2\u01f3\u01f5\5\u00a1Q\2\u01f4\u01f6\5\u00a3R\2\u01f5\u01f4"+
		"\3\2\2\2\u01f6\u01f7\3\2\2\2\u01f7\u01f5\3\2\2\2\u01f7\u01f8\3\2\2\2\u01f8"+
		"\u01f9\3\2\2\2\u01f9\u01fa\5\u00a5S\2\u01fa\u01fc\3\2\2\2\u01fb\u01e7"+
		"\3\2\2\2\u01fb\u01eb\3\2\2\2\u01fb\u01f3\3\2\2\2\u01fc\u009a\3\2\2\2\u01fd"+
		"\u01fe\7)\2\2\u01fe\u01ff\5a\61\2\u01ff\u009c\3\2\2\2\u0200\u0201\t\""+
		"\2\2\u0201\u009e\3\2\2\2\u0202\u0203\7)\2\2\u0203\u00a0\3\2\2\2\u0204"+
		"\u0205\7)\2\2\u0205\u0206\5U+\2\u0206\u00a2\3\2\2\2\u0207\u0208\4\62\63"+
		"\2\u0208\u00a4\3\2\2\2\u0209\u020a\7)\2\2\u020a\u00a6\3\2\2\2\u020b\u020f"+
		"\5\u00a9U\2\u020c\u020e\5\u00abV\2\u020d\u020c\3\2\2\2\u020e\u0211\3\2"+
		"\2\2\u020f\u020d\3\2\2\2\u020f\u0210\3\2\2\2\u0210\u00a8\3\2\2\2\u0211"+
		"\u020f\3\2\2\2\u0212\u0213\t#\2\2\u0213\u00aa\3\2\2\2\u0214\u0217\5\u00a9"+
		"U\2\u0215\u0217\4\62;\2\u0216\u0214\3\2\2\2\u0216\u0215\3\2\2\2\u0217"+
		"\u00ac\3\2\2\2\31\2\u0188\u0190\u01a0\u01a5\u01ac\u01ae\u01bb\u01c0\u01c6"+
		"\u01ca\u01d0\u01d3\u01d8\u01db\u01df\u01e4\u01e9\u01ef\u01f7\u01fb\u020f"+
		"\u0216\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}