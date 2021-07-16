// Generated from /Users/jizou/Documents/leetcode/antlr/LessParser.g4 by ANTLR 4.8
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class LessParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		NULL_=1, IN=2, Unit=3, Ellipsis=4, InterpolationStart=5, LPAREN=6, RPAREN=7, 
		BlockStart=8, BlockEnd=9, LBRACK=10, RBRACK=11, GT=12, TIL=13, LT=14, 
		COLON=15, SEMI=16, COMMA=17, DOT=18, DOLLAR=19, AT=20, PARENTREF=21, HASH=22, 
		COLONCOLON=23, PLUS=24, TIMES=25, DIV=26, MINUS=27, PERC=28, EQEQ=29, 
		GTEQ=30, LTEQ=31, NOTEQ=32, EQ=33, PIPE_EQ=34, TILD_EQ=35, URL=36, UrlStart=37, 
		IMPORT=38, MEDIA=39, EXTEND=40, IMPORTANT=41, ARGUMENTS=42, REST=43, REFERENCE=44, 
		INLINE=45, LESS=46, CSS=47, ONCE=48, MULTIPLE=49, WHEN=50, NOT=51, AND=52, 
		Identifier=53, StringLiteral=54, Number=55, Color=56, WS=57, SL_COMMENT=58, 
		COMMENT=59, FUNCTION_NAME=60, COLOR=61, CONVERT=62, DATA_URI=63, DEFAULT=64, 
		UNIT=65, GET_UNIT=66, SVG_GRADIENT=67, ESCAPE=68, E=69, FORMAT=70, REPLACE=71, 
		LENGTH=72, EXTRACT=73, CEIL=74, FLOOR=75, PERCENTAGE=76, ROUND=77, SQRT=78, 
		ABS=79, SIN=80, ASIN=81, COS=82, ACOS=83, TAN=84, ATAN=85, PI=86, POW=87, 
		MOD=88, MIN=89, MAX=90, ISNUMBER=91, ISSTRING=92, ISCOLOR=93, ISKEYWORD=94, 
		ISURL=95, ISPIXEL=96, ISEM=97, ISPERCENTAGE=98, ISUNIT=99, RGB=100, RGBA=101, 
		ARGB=102, HSL=103, HSLA=104, HSV=105, HSVA=106, HUE=107, SATURATION=108, 
		LIGHTNESS=109, HSVHUE=110, HSVSATURATION=111, HSVVALUE=112, RED=113, GREEN=114, 
		BLUE=115, ALPHA=116, LUMA=117, LUMINANCE=118, SATURATE=119, DESATURATE=120, 
		LIGHTEN=121, DARKEN=122, FADEIN=123, FADEOUT=124, FADE=125, SPIN=126, 
		MIX=127, GREYSCALE=128, CONTRAST=129, MULTIPLY=130, SCREEN=131, OVERLAY=132, 
		SOFTLIGHT=133, HARDLIGHT=134, DIFFERENCE=135, EXCLUSION=136, AVERAGE=137, 
		NEGATION=138, UrlEnd=139, Url=140, SPACE=141, InterpolationStartAfter=142, 
		IdentifierAfter=143;
	public static final int
		RULE_stylesheet = 0, RULE_statement = 1, RULE_variableName = 2, RULE_commandStatement = 3, 
		RULE_mathCharacter = 4, RULE_mathStatement = 5, RULE_expression = 6, RULE_function_ = 7, 
		RULE_conditions = 8, RULE_condition = 9, RULE_conditionStatement = 10, 
		RULE_variableDeclaration = 11, RULE_importDeclaration = 12, RULE_importOption = 13, 
		RULE_referenceUrl = 14, RULE_mediaTypes = 15, RULE_ruleset = 16, RULE_block = 17, 
		RULE_mixinDefinition = 18, RULE_mixinGuard = 19, RULE_mixinDefinitionParam = 20, 
		RULE_mixinReference = 21, RULE_selectors = 22, RULE_selector = 23, RULE_attrib = 24, 
		RULE_negation = 25, RULE_pseudo = 26, RULE_element = 27, RULE_selectorPrefix = 28, 
		RULE_attribRelate = 29, RULE_identifier = 30, RULE_identifierPart = 31, 
		RULE_identifierVariableName = 32, RULE_property_ = 33, RULE_values = 34, 
		RULE_url = 35, RULE_measurement = 36;
	private static String[] makeRuleNames() {
		return new String[] {
			"stylesheet", "statement", "variableName", "commandStatement", "mathCharacter", 
			"mathStatement", "expression", "function_", "conditions", "condition", 
			"conditionStatement", "variableDeclaration", "importDeclaration", "importOption", 
			"referenceUrl", "mediaTypes", "ruleset", "block", "mixinDefinition", 
			"mixinGuard", "mixinDefinitionParam", "mixinReference", "selectors", 
			"selector", "attrib", "negation", "pseudo", "element", "selectorPrefix", 
			"attribRelate", "identifier", "identifierPart", "identifierVariableName", 
			"property_", "values", "url", "measurement"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'null'", "'in'", null, "'...'", null, "'('", "')'", "'{'", "'}'", 
			"'['", "']'", "'>'", "'~'", "'<'", "':'", "';'", "','", "'.'", "'$'", 
			"'@'", "'&'", "'#'", "'::'", "'+'", "'*'", "'/'", "'-'", null, "'=='", 
			"'>='", "'<='", "'!='", "'='", "'|='", "'~='", "'url'", null, "'@import'", 
			"'@media'", "':extend'", "'!important'", "'@arguments'", "'@rest'", "'reference'", 
			"'inline'", "'less'", "'css'", "'once'", "'multiple'", "'when'", "'not'", 
			"'and'", null, null, null, null, null, null, null, null, "'color'", "'convert'", 
			"'data-uri'", "'default'", "'unit'", "'get-unit'", "'svg-gradient'", 
			"'escape'", "'e'", null, "'replace'", "'length'", "'extract'", "'ceil'", 
			"'floor'", "'percentage'", "'round'", "'sqrt'", "'abs'", "'sin'", "'asin'", 
			"'cos'", "'acos'", "'tan'", "'atan'", "'pi'", "'pow'", "'mod'", "'min'", 
			"'max'", "'isnumber'", "'isstring'", "'iscolor'", "'iskeyword'", "'isurl'", 
			"'ispixel'", "'isem'", "'ispercentage'", "'isunit'", "'rgb'", "'rgba'", 
			"'argb'", "'hsl'", "'hsla'", "'hsv'", "'hsva'", "'hue'", "'saturation'", 
			"'lightness'", "'hsvhue'", "'hsvsaturation'", "'hsvvalue'", "'red'", 
			"'green'", "'blue'", "'alpha'", "'luma'", "'luminance'", "'saturate'", 
			"'desaturate'", "'lighten'", "'darken'", "'fadein'", "'fadeout'", "'fade'", 
			"'spin'", "'mix'", "'greyscale'", "'contrast'", "'multiply'", "'screen'", 
			"'overlay'", "'softlight'", "'hardlight'", "'difference'", "'exclusion'", 
			"'average'", "'negation'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "NULL_", "IN", "Unit", "Ellipsis", "InterpolationStart", "LPAREN", 
			"RPAREN", "BlockStart", "BlockEnd", "LBRACK", "RBRACK", "GT", "TIL", 
			"LT", "COLON", "SEMI", "COMMA", "DOT", "DOLLAR", "AT", "PARENTREF", "HASH", 
			"COLONCOLON", "PLUS", "TIMES", "DIV", "MINUS", "PERC", "EQEQ", "GTEQ", 
			"LTEQ", "NOTEQ", "EQ", "PIPE_EQ", "TILD_EQ", "URL", "UrlStart", "IMPORT", 
			"MEDIA", "EXTEND", "IMPORTANT", "ARGUMENTS", "REST", "REFERENCE", "INLINE", 
			"LESS", "CSS", "ONCE", "MULTIPLE", "WHEN", "NOT", "AND", "Identifier", 
			"StringLiteral", "Number", "Color", "WS", "SL_COMMENT", "COMMENT", "FUNCTION_NAME", 
			"COLOR", "CONVERT", "DATA_URI", "DEFAULT", "UNIT", "GET_UNIT", "SVG_GRADIENT", 
			"ESCAPE", "E", "FORMAT", "REPLACE", "LENGTH", "EXTRACT", "CEIL", "FLOOR", 
			"PERCENTAGE", "ROUND", "SQRT", "ABS", "SIN", "ASIN", "COS", "ACOS", "TAN", 
			"ATAN", "PI", "POW", "MOD", "MIN", "MAX", "ISNUMBER", "ISSTRING", "ISCOLOR", 
			"ISKEYWORD", "ISURL", "ISPIXEL", "ISEM", "ISPERCENTAGE", "ISUNIT", "RGB", 
			"RGBA", "ARGB", "HSL", "HSLA", "HSV", "HSVA", "HUE", "SATURATION", "LIGHTNESS", 
			"HSVHUE", "HSVSATURATION", "HSVVALUE", "RED", "GREEN", "BLUE", "ALPHA", 
			"LUMA", "LUMINANCE", "SATURATE", "DESATURATE", "LIGHTEN", "DARKEN", "FADEIN", 
			"FADEOUT", "FADE", "SPIN", "MIX", "GREYSCALE", "CONTRAST", "MULTIPLY", 
			"SCREEN", "OVERLAY", "SOFTLIGHT", "HARDLIGHT", "DIFFERENCE", "EXCLUSION", 
			"AVERAGE", "NEGATION", "UrlEnd", "Url", "SPACE", "InterpolationStartAfter", 
			"IdentifierAfter"
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

	@Override
	public String getGrammarFileName() { return "LessParser.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public LessParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class StylesheetContext extends ParserRuleContext {
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public StylesheetContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stylesheet; }
	}

	public final StylesheetContext stylesheet() throws RecognitionException {
		StylesheetContext _localctx = new StylesheetContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_stylesheet);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(77);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << InterpolationStart) | (1L << GT) | (1L << TIL) | (1L << COLON) | (1L << AT) | (1L << PARENTREF) | (1L << HASH) | (1L << COLONCOLON) | (1L << PLUS) | (1L << TIMES) | (1L << IMPORT) | (1L << Identifier))) != 0)) {
				{
				{
				setState(74);
				statement();
				}
				}
				setState(79);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatementContext extends ParserRuleContext {
		public ImportDeclarationContext importDeclaration() {
			return getRuleContext(ImportDeclarationContext.class,0);
		}
		public RulesetContext ruleset() {
			return getRuleContext(RulesetContext.class,0);
		}
		public VariableDeclarationContext variableDeclaration() {
			return getRuleContext(VariableDeclarationContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(LessParser.SEMI, 0); }
		public MixinDefinitionContext mixinDefinition() {
			return getRuleContext(MixinDefinitionContext.class,0);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_statement);
		try {
			setState(86);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(80);
				importDeclaration();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(81);
				ruleset();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(82);
				variableDeclaration();
				setState(83);
				match(SEMI);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(85);
				mixinDefinition();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VariableNameContext extends ParserRuleContext {
		public TerminalNode AT() { return getToken(LessParser.AT, 0); }
		public VariableNameContext variableName() {
			return getRuleContext(VariableNameContext.class,0);
		}
		public TerminalNode Identifier() { return getToken(LessParser.Identifier, 0); }
		public VariableNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableName; }
	}

	public final VariableNameContext variableName() throws RecognitionException {
		VariableNameContext _localctx = new VariableNameContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_variableName);
		try {
			setState(92);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(88);
				match(AT);
				setState(89);
				variableName();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(90);
				match(AT);
				setState(91);
				match(Identifier);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CommandStatementContext extends ParserRuleContext {
		public MathStatementContext mathStatement() {
			return getRuleContext(MathStatementContext.class,0);
		}
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public CommandStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_commandStatement; }
	}

	public final CommandStatementContext commandStatement() throws RecognitionException {
		CommandStatementContext _localctx = new CommandStatementContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_commandStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(95); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(94);
				expression();
				}
				}
				setState(97); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << InterpolationStart) | (1L << AT) | (1L << UrlStart) | (1L << Identifier) | (1L << StringLiteral) | (1L << Number) | (1L << Color))) != 0) );
			}
			setState(100);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << PLUS) | (1L << TIMES) | (1L << DIV) | (1L << MINUS) | (1L << PERC))) != 0)) {
				{
				setState(99);
				mathStatement();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MathCharacterContext extends ParserRuleContext {
		public TerminalNode TIMES() { return getToken(LessParser.TIMES, 0); }
		public TerminalNode PLUS() { return getToken(LessParser.PLUS, 0); }
		public TerminalNode DIV() { return getToken(LessParser.DIV, 0); }
		public TerminalNode MINUS() { return getToken(LessParser.MINUS, 0); }
		public TerminalNode PERC() { return getToken(LessParser.PERC, 0); }
		public MathCharacterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mathCharacter; }
	}

	public final MathCharacterContext mathCharacter() throws RecognitionException {
		MathCharacterContext _localctx = new MathCharacterContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_mathCharacter);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(102);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << PLUS) | (1L << TIMES) | (1L << DIV) | (1L << MINUS) | (1L << PERC))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MathStatementContext extends ParserRuleContext {
		public MathCharacterContext mathCharacter() {
			return getRuleContext(MathCharacterContext.class,0);
		}
		public CommandStatementContext commandStatement() {
			return getRuleContext(CommandStatementContext.class,0);
		}
		public MathStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mathStatement; }
	}

	public final MathStatementContext mathStatement() throws RecognitionException {
		MathStatementContext _localctx = new MathStatementContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_mathStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(104);
			mathCharacter();
			setState(105);
			commandStatement();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionContext extends ParserRuleContext {
		public MeasurementContext measurement() {
			return getRuleContext(MeasurementContext.class,0);
		}
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode IMPORTANT() { return getToken(LessParser.IMPORTANT, 0); }
		public TerminalNode LPAREN() { return getToken(LessParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(LessParser.RPAREN, 0); }
		public ValuesContext values() {
			return getRuleContext(ValuesContext.class,0);
		}
		public TerminalNode Color() { return getToken(LessParser.Color, 0); }
		public TerminalNode StringLiteral() { return getToken(LessParser.StringLiteral, 0); }
		public UrlContext url() {
			return getRuleContext(UrlContext.class,0);
		}
		public VariableNameContext variableName() {
			return getRuleContext(VariableNameContext.class,0);
		}
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
	}

	public final ExpressionContext expression() throws RecognitionException {
		ExpressionContext _localctx = new ExpressionContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_expression);
		int _la;
		try {
			setState(126);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(107);
				measurement();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(108);
				identifier();
				setState(109);
				match(IMPORTANT);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(111);
				identifier();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(112);
				identifier();
				setState(113);
				match(LPAREN);
				setState(115);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << InterpolationStart) | (1L << AT) | (1L << UrlStart) | (1L << Identifier) | (1L << StringLiteral) | (1L << Number) | (1L << Color))) != 0)) {
					{
					setState(114);
					values();
					}
				}

				setState(117);
				match(RPAREN);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(119);
				match(Color);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(120);
				match(StringLiteral);
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(121);
				url();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(122);
				variableName();
				setState(123);
				match(IMPORTANT);
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(125);
				variableName();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Function_Context extends ParserRuleContext {
		public TerminalNode FUNCTION_NAME() { return getToken(LessParser.FUNCTION_NAME, 0); }
		public TerminalNode LPAREN() { return getToken(LessParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(LessParser.RPAREN, 0); }
		public ValuesContext values() {
			return getRuleContext(ValuesContext.class,0);
		}
		public Function_Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_function_; }
	}

	public final Function_Context function_() throws RecognitionException {
		Function_Context _localctx = new Function_Context(_ctx, getState());
		enterRule(_localctx, 14, RULE_function_);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(128);
			match(FUNCTION_NAME);
			setState(129);
			match(LPAREN);
			setState(131);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << InterpolationStart) | (1L << AT) | (1L << UrlStart) | (1L << Identifier) | (1L << StringLiteral) | (1L << Number) | (1L << Color))) != 0)) {
				{
				setState(130);
				values();
				}
			}

			setState(133);
			match(RPAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ConditionsContext extends ParserRuleContext {
		public List<ConditionContext> condition() {
			return getRuleContexts(ConditionContext.class);
		}
		public ConditionContext condition(int i) {
			return getRuleContext(ConditionContext.class,i);
		}
		public List<TerminalNode> AND() { return getTokens(LessParser.AND); }
		public TerminalNode AND(int i) {
			return getToken(LessParser.AND, i);
		}
		public List<TerminalNode> COMMA() { return getTokens(LessParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(LessParser.COMMA, i);
		}
		public ConditionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_conditions; }
	}

	public final ConditionsContext conditions() throws RecognitionException {
		ConditionsContext _localctx = new ConditionsContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_conditions);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(135);
			condition();
			setState(140);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA || _la==AND) {
				{
				{
				setState(136);
				_la = _input.LA(1);
				if ( !(_la==COMMA || _la==AND) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(137);
				condition();
				}
				}
				setState(142);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ConditionContext extends ParserRuleContext {
		public TerminalNode LPAREN() { return getToken(LessParser.LPAREN, 0); }
		public ConditionStatementContext conditionStatement() {
			return getRuleContext(ConditionStatementContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(LessParser.RPAREN, 0); }
		public TerminalNode NOT() { return getToken(LessParser.NOT, 0); }
		public ConditionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_condition; }
	}

	public final ConditionContext condition() throws RecognitionException {
		ConditionContext _localctx = new ConditionContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_condition);
		try {
			setState(152);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LPAREN:
				enterOuterAlt(_localctx, 1);
				{
				setState(143);
				match(LPAREN);
				setState(144);
				conditionStatement();
				setState(145);
				match(RPAREN);
				}
				break;
			case NOT:
				enterOuterAlt(_localctx, 2);
				{
				setState(147);
				match(NOT);
				setState(148);
				match(LPAREN);
				setState(149);
				conditionStatement();
				setState(150);
				match(RPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ConditionStatementContext extends ParserRuleContext {
		public List<CommandStatementContext> commandStatement() {
			return getRuleContexts(CommandStatementContext.class);
		}
		public CommandStatementContext commandStatement(int i) {
			return getRuleContext(CommandStatementContext.class,i);
		}
		public TerminalNode EQ() { return getToken(LessParser.EQ, 0); }
		public TerminalNode LT() { return getToken(LessParser.LT, 0); }
		public TerminalNode GT() { return getToken(LessParser.GT, 0); }
		public TerminalNode GTEQ() { return getToken(LessParser.GTEQ, 0); }
		public TerminalNode LTEQ() { return getToken(LessParser.LTEQ, 0); }
		public ConditionStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_conditionStatement; }
	}

	public final ConditionStatementContext conditionStatement() throws RecognitionException {
		ConditionStatementContext _localctx = new ConditionStatementContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_conditionStatement);
		int _la;
		try {
			setState(159);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,10,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(154);
				commandStatement();
				setState(155);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << GT) | (1L << LT) | (1L << GTEQ) | (1L << LTEQ) | (1L << EQ))) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(156);
				commandStatement();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(158);
				commandStatement();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VariableDeclarationContext extends ParserRuleContext {
		public VariableNameContext variableName() {
			return getRuleContext(VariableNameContext.class,0);
		}
		public TerminalNode COLON() { return getToken(LessParser.COLON, 0); }
		public ValuesContext values() {
			return getRuleContext(ValuesContext.class,0);
		}
		public VariableDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableDeclaration; }
	}

	public final VariableDeclarationContext variableDeclaration() throws RecognitionException {
		VariableDeclarationContext _localctx = new VariableDeclarationContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_variableDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(161);
			variableName();
			setState(162);
			match(COLON);
			setState(163);
			values();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ImportDeclarationContext extends ParserRuleContext {
		public TerminalNode IMPORT() { return getToken(LessParser.IMPORT, 0); }
		public ReferenceUrlContext referenceUrl() {
			return getRuleContext(ReferenceUrlContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(LessParser.SEMI, 0); }
		public TerminalNode LPAREN() { return getToken(LessParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(LessParser.RPAREN, 0); }
		public MediaTypesContext mediaTypes() {
			return getRuleContext(MediaTypesContext.class,0);
		}
		public List<ImportOptionContext> importOption() {
			return getRuleContexts(ImportOptionContext.class);
		}
		public ImportOptionContext importOption(int i) {
			return getRuleContext(ImportOptionContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(LessParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(LessParser.COMMA, i);
		}
		public ImportDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_importDeclaration; }
	}

	public final ImportDeclarationContext importDeclaration() throws RecognitionException {
		ImportDeclarationContext _localctx = new ImportDeclarationContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_importDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(165);
			match(IMPORT);
			setState(177);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LPAREN) {
				{
				setState(166);
				match(LPAREN);
				{
				setState(167);
				importOption();
				setState(172);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(168);
					match(COMMA);
					setState(169);
					importOption();
					}
					}
					setState(174);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				setState(175);
				match(RPAREN);
				}
			}

			setState(179);
			referenceUrl();
			setState(181);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Identifier) {
				{
				setState(180);
				mediaTypes();
				}
			}

			setState(183);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ImportOptionContext extends ParserRuleContext {
		public TerminalNode REFERENCE() { return getToken(LessParser.REFERENCE, 0); }
		public TerminalNode INLINE() { return getToken(LessParser.INLINE, 0); }
		public TerminalNode LESS() { return getToken(LessParser.LESS, 0); }
		public TerminalNode CSS() { return getToken(LessParser.CSS, 0); }
		public TerminalNode ONCE() { return getToken(LessParser.ONCE, 0); }
		public TerminalNode MULTIPLE() { return getToken(LessParser.MULTIPLE, 0); }
		public ImportOptionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_importOption; }
	}

	public final ImportOptionContext importOption() throws RecognitionException {
		ImportOptionContext _localctx = new ImportOptionContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_importOption);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(185);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << REFERENCE) | (1L << INLINE) | (1L << LESS) | (1L << CSS) | (1L << ONCE) | (1L << MULTIPLE))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ReferenceUrlContext extends ParserRuleContext {
		public TerminalNode StringLiteral() { return getToken(LessParser.StringLiteral, 0); }
		public TerminalNode UrlStart() { return getToken(LessParser.UrlStart, 0); }
		public TerminalNode Url() { return getToken(LessParser.Url, 0); }
		public TerminalNode UrlEnd() { return getToken(LessParser.UrlEnd, 0); }
		public ReferenceUrlContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_referenceUrl; }
	}

	public final ReferenceUrlContext referenceUrl() throws RecognitionException {
		ReferenceUrlContext _localctx = new ReferenceUrlContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_referenceUrl);
		try {
			setState(191);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case StringLiteral:
				enterOuterAlt(_localctx, 1);
				{
				setState(187);
				match(StringLiteral);
				}
				break;
			case UrlStart:
				enterOuterAlt(_localctx, 2);
				{
				setState(188);
				match(UrlStart);
				setState(189);
				match(Url);
				setState(190);
				match(UrlEnd);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MediaTypesContext extends ParserRuleContext {
		public List<TerminalNode> Identifier() { return getTokens(LessParser.Identifier); }
		public TerminalNode Identifier(int i) {
			return getToken(LessParser.Identifier, i);
		}
		public List<TerminalNode> COMMA() { return getTokens(LessParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(LessParser.COMMA, i);
		}
		public MediaTypesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mediaTypes; }
	}

	public final MediaTypesContext mediaTypes() throws RecognitionException {
		MediaTypesContext _localctx = new MediaTypesContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_mediaTypes);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(193);
			match(Identifier);
			setState(198);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(194);
				match(COMMA);
				setState(195);
				match(Identifier);
				}
				}
				setState(200);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RulesetContext extends ParserRuleContext {
		public SelectorsContext selectors() {
			return getRuleContext(SelectorsContext.class,0);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public RulesetContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ruleset; }
	}

	public final RulesetContext ruleset() throws RecognitionException {
		RulesetContext _localctx = new RulesetContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_ruleset);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(201);
			selectors();
			setState(202);
			block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BlockContext extends ParserRuleContext {
		public TerminalNode BlockStart() { return getToken(LessParser.BlockStart, 0); }
		public TerminalNode BlockEnd() { return getToken(LessParser.BlockEnd, 0); }
		public List<Property_Context> property_() {
			return getRuleContexts(Property_Context.class);
		}
		public Property_Context property_(int i) {
			return getRuleContext(Property_Context.class,i);
		}
		public List<TerminalNode> SEMI() { return getTokens(LessParser.SEMI); }
		public TerminalNode SEMI(int i) {
			return getToken(LessParser.SEMI, i);
		}
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public List<MixinReferenceContext> mixinReference() {
			return getRuleContexts(MixinReferenceContext.class);
		}
		public MixinReferenceContext mixinReference(int i) {
			return getRuleContext(MixinReferenceContext.class,i);
		}
		public BlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_block; }
	}

	public final BlockContext block() throws RecognitionException {
		BlockContext _localctx = new BlockContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_block);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(204);
			match(BlockStart);
			setState(212);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,17,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					setState(210);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,16,_ctx) ) {
					case 1:
						{
						setState(205);
						property_();
						setState(206);
						match(SEMI);
						}
						break;
					case 2:
						{
						setState(208);
						statement();
						}
						break;
					case 3:
						{
						setState(209);
						mixinReference();
						}
						break;
					}
					} 
				}
				setState(214);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,17,_ctx);
			}
			setState(216);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==InterpolationStart || _la==Identifier) {
				{
				setState(215);
				property_();
				}
			}

			setState(218);
			match(BlockEnd);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MixinDefinitionContext extends ParserRuleContext {
		public SelectorsContext selectors() {
			return getRuleContext(SelectorsContext.class,0);
		}
		public TerminalNode LPAREN() { return getToken(LessParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(LessParser.RPAREN, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public List<MixinDefinitionParamContext> mixinDefinitionParam() {
			return getRuleContexts(MixinDefinitionParamContext.class);
		}
		public MixinDefinitionParamContext mixinDefinitionParam(int i) {
			return getRuleContext(MixinDefinitionParamContext.class,i);
		}
		public TerminalNode Ellipsis() { return getToken(LessParser.Ellipsis, 0); }
		public MixinGuardContext mixinGuard() {
			return getRuleContext(MixinGuardContext.class,0);
		}
		public List<TerminalNode> SEMI() { return getTokens(LessParser.SEMI); }
		public TerminalNode SEMI(int i) {
			return getToken(LessParser.SEMI, i);
		}
		public MixinDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mixinDefinition; }
	}

	public final MixinDefinitionContext mixinDefinition() throws RecognitionException {
		MixinDefinitionContext _localctx = new MixinDefinitionContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_mixinDefinition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(220);
			selectors();
			setState(221);
			match(LPAREN);
			setState(230);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==AT) {
				{
				setState(222);
				mixinDefinitionParam();
				setState(227);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==SEMI) {
					{
					{
					setState(223);
					match(SEMI);
					setState(224);
					mixinDefinitionParam();
					}
					}
					setState(229);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(233);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Ellipsis) {
				{
				setState(232);
				match(Ellipsis);
				}
			}

			setState(235);
			match(RPAREN);
			setState(237);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WHEN) {
				{
				setState(236);
				mixinGuard();
				}
			}

			setState(239);
			block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MixinGuardContext extends ParserRuleContext {
		public TerminalNode WHEN() { return getToken(LessParser.WHEN, 0); }
		public ConditionsContext conditions() {
			return getRuleContext(ConditionsContext.class,0);
		}
		public MixinGuardContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mixinGuard; }
	}

	public final MixinGuardContext mixinGuard() throws RecognitionException {
		MixinGuardContext _localctx = new MixinGuardContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_mixinGuard);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(241);
			match(WHEN);
			setState(242);
			conditions();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MixinDefinitionParamContext extends ParserRuleContext {
		public VariableNameContext variableName() {
			return getRuleContext(VariableNameContext.class,0);
		}
		public VariableDeclarationContext variableDeclaration() {
			return getRuleContext(VariableDeclarationContext.class,0);
		}
		public MixinDefinitionParamContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mixinDefinitionParam; }
	}

	public final MixinDefinitionParamContext mixinDefinitionParam() throws RecognitionException {
		MixinDefinitionParamContext _localctx = new MixinDefinitionParamContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_mixinDefinitionParam);
		try {
			setState(246);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,23,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(244);
				variableName();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(245);
				variableDeclaration();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MixinReferenceContext extends ParserRuleContext {
		public SelectorContext selector() {
			return getRuleContext(SelectorContext.class,0);
		}
		public TerminalNode LPAREN() { return getToken(LessParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(LessParser.RPAREN, 0); }
		public TerminalNode SEMI() { return getToken(LessParser.SEMI, 0); }
		public ValuesContext values() {
			return getRuleContext(ValuesContext.class,0);
		}
		public TerminalNode IMPORTANT() { return getToken(LessParser.IMPORTANT, 0); }
		public MixinReferenceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mixinReference; }
	}

	public final MixinReferenceContext mixinReference() throws RecognitionException {
		MixinReferenceContext _localctx = new MixinReferenceContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_mixinReference);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(248);
			selector();
			setState(249);
			match(LPAREN);
			setState(251);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << InterpolationStart) | (1L << AT) | (1L << UrlStart) | (1L << Identifier) | (1L << StringLiteral) | (1L << Number) | (1L << Color))) != 0)) {
				{
				setState(250);
				values();
				}
			}

			setState(253);
			match(RPAREN);
			setState(255);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==IMPORTANT) {
				{
				setState(254);
				match(IMPORTANT);
				}
			}

			setState(257);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SelectorsContext extends ParserRuleContext {
		public List<SelectorContext> selector() {
			return getRuleContexts(SelectorContext.class);
		}
		public SelectorContext selector(int i) {
			return getRuleContext(SelectorContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(LessParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(LessParser.COMMA, i);
		}
		public SelectorsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_selectors; }
	}

	public final SelectorsContext selectors() throws RecognitionException {
		SelectorsContext _localctx = new SelectorsContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_selectors);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(259);
			selector();
			setState(264);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(260);
				match(COMMA);
				setState(261);
				selector();
				}
				}
				setState(266);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SelectorContext extends ParserRuleContext {
		public List<ElementContext> element() {
			return getRuleContexts(ElementContext.class);
		}
		public ElementContext element(int i) {
			return getRuleContext(ElementContext.class,i);
		}
		public List<AttribContext> attrib() {
			return getRuleContexts(AttribContext.class);
		}
		public AttribContext attrib(int i) {
			return getRuleContext(AttribContext.class,i);
		}
		public PseudoContext pseudo() {
			return getRuleContext(PseudoContext.class,0);
		}
		public SelectorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_selector; }
	}

	public final SelectorContext selector() throws RecognitionException {
		SelectorContext _localctx = new SelectorContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_selector);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(268); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(267);
					element();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(270); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,27,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			setState(275);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==LBRACK) {
				{
				{
				setState(272);
				attrib();
				}
				}
				setState(277);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(279);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COLON || _la==COLONCOLON) {
				{
				setState(278);
				pseudo();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AttribContext extends ParserRuleContext {
		public TerminalNode LBRACK() { return getToken(LessParser.LBRACK, 0); }
		public List<TerminalNode> Identifier() { return getTokens(LessParser.Identifier); }
		public TerminalNode Identifier(int i) {
			return getToken(LessParser.Identifier, i);
		}
		public TerminalNode RBRACK() { return getToken(LessParser.RBRACK, 0); }
		public AttribRelateContext attribRelate() {
			return getRuleContext(AttribRelateContext.class,0);
		}
		public TerminalNode StringLiteral() { return getToken(LessParser.StringLiteral, 0); }
		public AttribContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_attrib; }
	}

	public final AttribContext attrib() throws RecognitionException {
		AttribContext _localctx = new AttribContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_attrib);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(281);
			match(LBRACK);
			setState(282);
			match(Identifier);
			setState(286);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << EQ) | (1L << PIPE_EQ) | (1L << TILD_EQ))) != 0)) {
				{
				setState(283);
				attribRelate();
				setState(284);
				_la = _input.LA(1);
				if ( !(_la==Identifier || _la==StringLiteral) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
			}

			setState(288);
			match(RBRACK);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NegationContext extends ParserRuleContext {
		public TerminalNode COLON() { return getToken(LessParser.COLON, 0); }
		public TerminalNode NOT() { return getToken(LessParser.NOT, 0); }
		public TerminalNode LPAREN() { return getToken(LessParser.LPAREN, 0); }
		public SelectorsContext selectors() {
			return getRuleContext(SelectorsContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(LessParser.RPAREN, 0); }
		public TerminalNode LBRACK() { return getToken(LessParser.LBRACK, 0); }
		public TerminalNode RBRACK() { return getToken(LessParser.RBRACK, 0); }
		public NegationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_negation; }
	}

	public final NegationContext negation() throws RecognitionException {
		NegationContext _localctx = new NegationContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_negation);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(290);
			match(COLON);
			setState(291);
			match(NOT);
			setState(292);
			match(LPAREN);
			setState(294);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LBRACK) {
				{
				setState(293);
				match(LBRACK);
				}
			}

			setState(296);
			selectors();
			setState(298);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==RBRACK) {
				{
				setState(297);
				match(RBRACK);
				}
			}

			setState(300);
			match(RPAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PseudoContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(LessParser.Identifier, 0); }
		public TerminalNode COLON() { return getToken(LessParser.COLON, 0); }
		public TerminalNode COLONCOLON() { return getToken(LessParser.COLONCOLON, 0); }
		public PseudoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pseudo; }
	}

	public final PseudoContext pseudo() throws RecognitionException {
		PseudoContext _localctx = new PseudoContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_pseudo);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(302);
			_la = _input.LA(1);
			if ( !(_la==COLON || _la==COLONCOLON) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(303);
			match(Identifier);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ElementContext extends ParserRuleContext {
		public SelectorPrefixContext selectorPrefix() {
			return getRuleContext(SelectorPrefixContext.class,0);
		}
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode HASH() { return getToken(LessParser.HASH, 0); }
		public PseudoContext pseudo() {
			return getRuleContext(PseudoContext.class,0);
		}
		public NegationContext negation() {
			return getRuleContext(NegationContext.class,0);
		}
		public TerminalNode PARENTREF() { return getToken(LessParser.PARENTREF, 0); }
		public TerminalNode TIMES() { return getToken(LessParser.TIMES, 0); }
		public ElementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_element; }
	}

	public final ElementContext element() throws RecognitionException {
		ElementContext _localctx = new ElementContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_element);
		try {
			setState(315);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,33,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(305);
				selectorPrefix();
				setState(306);
				identifier();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(308);
				identifier();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(309);
				match(HASH);
				setState(310);
				identifier();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(311);
				pseudo();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(312);
				negation();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(313);
				match(PARENTREF);
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(314);
				match(TIMES);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SelectorPrefixContext extends ParserRuleContext {
		public TerminalNode GT() { return getToken(LessParser.GT, 0); }
		public TerminalNode PLUS() { return getToken(LessParser.PLUS, 0); }
		public TerminalNode TIL() { return getToken(LessParser.TIL, 0); }
		public SelectorPrefixContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_selectorPrefix; }
	}

	public final SelectorPrefixContext selectorPrefix() throws RecognitionException {
		SelectorPrefixContext _localctx = new SelectorPrefixContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_selectorPrefix);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(317);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << GT) | (1L << TIL) | (1L << PLUS))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AttribRelateContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(LessParser.EQ, 0); }
		public TerminalNode TILD_EQ() { return getToken(LessParser.TILD_EQ, 0); }
		public TerminalNode PIPE_EQ() { return getToken(LessParser.PIPE_EQ, 0); }
		public AttribRelateContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_attribRelate; }
	}

	public final AttribRelateContext attribRelate() throws RecognitionException {
		AttribRelateContext _localctx = new AttribRelateContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_attribRelate);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(319);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << EQ) | (1L << PIPE_EQ) | (1L << TILD_EQ))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IdentifierContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(LessParser.Identifier, 0); }
		public List<IdentifierPartContext> identifierPart() {
			return getRuleContexts(IdentifierPartContext.class);
		}
		public IdentifierPartContext identifierPart(int i) {
			return getRuleContext(IdentifierPartContext.class,i);
		}
		public TerminalNode InterpolationStart() { return getToken(LessParser.InterpolationStart, 0); }
		public IdentifierVariableNameContext identifierVariableName() {
			return getRuleContext(IdentifierVariableNameContext.class,0);
		}
		public TerminalNode BlockEnd() { return getToken(LessParser.BlockEnd, 0); }
		public IdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifier; }
	}

	public final IdentifierContext identifier() throws RecognitionException {
		IdentifierContext _localctx = new IdentifierContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_identifier);
		int _la;
		try {
			setState(337);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Identifier:
				enterOuterAlt(_localctx, 1);
				{
				setState(321);
				match(Identifier);
				setState(325);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==InterpolationStartAfter || _la==IdentifierAfter) {
					{
					{
					setState(322);
					identifierPart();
					}
					}
					setState(327);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			case InterpolationStart:
				enterOuterAlt(_localctx, 2);
				{
				setState(328);
				match(InterpolationStart);
				setState(329);
				identifierVariableName();
				setState(330);
				match(BlockEnd);
				setState(334);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==InterpolationStartAfter || _la==IdentifierAfter) {
					{
					{
					setState(331);
					identifierPart();
					}
					}
					setState(336);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IdentifierPartContext extends ParserRuleContext {
		public TerminalNode InterpolationStartAfter() { return getToken(LessParser.InterpolationStartAfter, 0); }
		public IdentifierVariableNameContext identifierVariableName() {
			return getRuleContext(IdentifierVariableNameContext.class,0);
		}
		public TerminalNode BlockEnd() { return getToken(LessParser.BlockEnd, 0); }
		public TerminalNode IdentifierAfter() { return getToken(LessParser.IdentifierAfter, 0); }
		public IdentifierPartContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifierPart; }
	}

	public final IdentifierPartContext identifierPart() throws RecognitionException {
		IdentifierPartContext _localctx = new IdentifierPartContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_identifierPart);
		try {
			setState(344);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case InterpolationStartAfter:
				enterOuterAlt(_localctx, 1);
				{
				setState(339);
				match(InterpolationStartAfter);
				setState(340);
				identifierVariableName();
				setState(341);
				match(BlockEnd);
				}
				break;
			case IdentifierAfter:
				enterOuterAlt(_localctx, 2);
				{
				setState(343);
				match(IdentifierAfter);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IdentifierVariableNameContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(LessParser.Identifier, 0); }
		public TerminalNode IdentifierAfter() { return getToken(LessParser.IdentifierAfter, 0); }
		public IdentifierVariableNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifierVariableName; }
	}

	public final IdentifierVariableNameContext identifierVariableName() throws RecognitionException {
		IdentifierVariableNameContext _localctx = new IdentifierVariableNameContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_identifierVariableName);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(346);
			_la = _input.LA(1);
			if ( !(_la==Identifier || _la==IdentifierAfter) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Property_Context extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode COLON() { return getToken(LessParser.COLON, 0); }
		public ValuesContext values() {
			return getRuleContext(ValuesContext.class,0);
		}
		public Property_Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_property_; }
	}

	public final Property_Context property_() throws RecognitionException {
		Property_Context _localctx = new Property_Context(_ctx, getState());
		enterRule(_localctx, 66, RULE_property_);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(348);
			identifier();
			setState(349);
			match(COLON);
			setState(350);
			values();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ValuesContext extends ParserRuleContext {
		public List<CommandStatementContext> commandStatement() {
			return getRuleContexts(CommandStatementContext.class);
		}
		public CommandStatementContext commandStatement(int i) {
			return getRuleContext(CommandStatementContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(LessParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(LessParser.COMMA, i);
		}
		public ValuesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_values; }
	}

	public final ValuesContext values() throws RecognitionException {
		ValuesContext _localctx = new ValuesContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_values);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(352);
			commandStatement();
			setState(357);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(353);
				match(COMMA);
				setState(354);
				commandStatement();
				}
				}
				setState(359);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UrlContext extends ParserRuleContext {
		public TerminalNode UrlStart() { return getToken(LessParser.UrlStart, 0); }
		public TerminalNode Url() { return getToken(LessParser.Url, 0); }
		public TerminalNode UrlEnd() { return getToken(LessParser.UrlEnd, 0); }
		public UrlContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_url; }
	}

	public final UrlContext url() throws RecognitionException {
		UrlContext _localctx = new UrlContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_url);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(360);
			match(UrlStart);
			setState(361);
			match(Url);
			setState(362);
			match(UrlEnd);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MeasurementContext extends ParserRuleContext {
		public TerminalNode Number() { return getToken(LessParser.Number, 0); }
		public TerminalNode Unit() { return getToken(LessParser.Unit, 0); }
		public MeasurementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_measurement; }
	}

	public final MeasurementContext measurement() throws RecognitionException {
		MeasurementContext _localctx = new MeasurementContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_measurement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(364);
			match(Number);
			setState(366);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Unit) {
				{
				setState(365);
				match(Unit);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\u0091\u0173\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\3\2\7\2N\n\2\f\2\16\2Q\13\2\3\3\3"+
		"\3\3\3\3\3\3\3\3\3\5\3Y\n\3\3\4\3\4\3\4\3\4\5\4_\n\4\3\5\6\5b\n\5\r\5"+
		"\16\5c\3\5\5\5g\n\5\3\6\3\6\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3"+
		"\b\5\bv\n\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\5\b\u0081\n\b\3\t\3\t"+
		"\3\t\5\t\u0086\n\t\3\t\3\t\3\n\3\n\3\n\7\n\u008d\n\n\f\n\16\n\u0090\13"+
		"\n\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\5\13\u009b\n\13\3\f\3"+
		"\f\3\f\3\f\3\f\5\f\u00a2\n\f\3\r\3\r\3\r\3\r\3\16\3\16\3\16\3\16\3\16"+
		"\7\16\u00ad\n\16\f\16\16\16\u00b0\13\16\3\16\3\16\5\16\u00b4\n\16\3\16"+
		"\3\16\5\16\u00b8\n\16\3\16\3\16\3\17\3\17\3\20\3\20\3\20\3\20\5\20\u00c2"+
		"\n\20\3\21\3\21\3\21\7\21\u00c7\n\21\f\21\16\21\u00ca\13\21\3\22\3\22"+
		"\3\22\3\23\3\23\3\23\3\23\3\23\3\23\7\23\u00d5\n\23\f\23\16\23\u00d8\13"+
		"\23\3\23\5\23\u00db\n\23\3\23\3\23\3\24\3\24\3\24\3\24\3\24\7\24\u00e4"+
		"\n\24\f\24\16\24\u00e7\13\24\5\24\u00e9\n\24\3\24\5\24\u00ec\n\24\3\24"+
		"\3\24\5\24\u00f0\n\24\3\24\3\24\3\25\3\25\3\25\3\26\3\26\5\26\u00f9\n"+
		"\26\3\27\3\27\3\27\5\27\u00fe\n\27\3\27\3\27\5\27\u0102\n\27\3\27\3\27"+
		"\3\30\3\30\3\30\7\30\u0109\n\30\f\30\16\30\u010c\13\30\3\31\6\31\u010f"+
		"\n\31\r\31\16\31\u0110\3\31\7\31\u0114\n\31\f\31\16\31\u0117\13\31\3\31"+
		"\5\31\u011a\n\31\3\32\3\32\3\32\3\32\3\32\5\32\u0121\n\32\3\32\3\32\3"+
		"\33\3\33\3\33\3\33\5\33\u0129\n\33\3\33\3\33\5\33\u012d\n\33\3\33\3\33"+
		"\3\34\3\34\3\34\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\5\35"+
		"\u013e\n\35\3\36\3\36\3\37\3\37\3 \3 \7 \u0146\n \f \16 \u0149\13 \3 "+
		"\3 \3 \3 \7 \u014f\n \f \16 \u0152\13 \5 \u0154\n \3!\3!\3!\3!\3!\5!\u015b"+
		"\n!\3\"\3\"\3#\3#\3#\3#\3$\3$\3$\7$\u0166\n$\f$\16$\u0169\13$\3%\3%\3"+
		"%\3%\3&\3&\5&\u0171\n&\3&\2\2\'\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36"+
		" \"$&(*,.\60\62\64\668:<>@BDFHJ\2\13\3\2\32\36\4\2\23\23\66\66\6\2\16"+
		"\16\20\20 !##\3\2.\63\3\2\678\4\2\21\21\31\31\4\2\16\17\32\32\3\2#%\4"+
		"\2\67\67\u0091\u0091\2\u0184\2O\3\2\2\2\4X\3\2\2\2\6^\3\2\2\2\ba\3\2\2"+
		"\2\nh\3\2\2\2\fj\3\2\2\2\16\u0080\3\2\2\2\20\u0082\3\2\2\2\22\u0089\3"+
		"\2\2\2\24\u009a\3\2\2\2\26\u00a1\3\2\2\2\30\u00a3\3\2\2\2\32\u00a7\3\2"+
		"\2\2\34\u00bb\3\2\2\2\36\u00c1\3\2\2\2 \u00c3\3\2\2\2\"\u00cb\3\2\2\2"+
		"$\u00ce\3\2\2\2&\u00de\3\2\2\2(\u00f3\3\2\2\2*\u00f8\3\2\2\2,\u00fa\3"+
		"\2\2\2.\u0105\3\2\2\2\60\u010e\3\2\2\2\62\u011b\3\2\2\2\64\u0124\3\2\2"+
		"\2\66\u0130\3\2\2\28\u013d\3\2\2\2:\u013f\3\2\2\2<\u0141\3\2\2\2>\u0153"+
		"\3\2\2\2@\u015a\3\2\2\2B\u015c\3\2\2\2D\u015e\3\2\2\2F\u0162\3\2\2\2H"+
		"\u016a\3\2\2\2J\u016e\3\2\2\2LN\5\4\3\2ML\3\2\2\2NQ\3\2\2\2OM\3\2\2\2"+
		"OP\3\2\2\2P\3\3\2\2\2QO\3\2\2\2RY\5\32\16\2SY\5\"\22\2TU\5\30\r\2UV\7"+
		"\22\2\2VY\3\2\2\2WY\5&\24\2XR\3\2\2\2XS\3\2\2\2XT\3\2\2\2XW\3\2\2\2Y\5"+
		"\3\2\2\2Z[\7\26\2\2[_\5\6\4\2\\]\7\26\2\2]_\7\67\2\2^Z\3\2\2\2^\\\3\2"+
		"\2\2_\7\3\2\2\2`b\5\16\b\2a`\3\2\2\2bc\3\2\2\2ca\3\2\2\2cd\3\2\2\2df\3"+
		"\2\2\2eg\5\f\7\2fe\3\2\2\2fg\3\2\2\2g\t\3\2\2\2hi\t\2\2\2i\13\3\2\2\2"+
		"jk\5\n\6\2kl\5\b\5\2l\r\3\2\2\2m\u0081\5J&\2no\5> \2op\7+\2\2p\u0081\3"+
		"\2\2\2q\u0081\5> \2rs\5> \2su\7\b\2\2tv\5F$\2ut\3\2\2\2uv\3\2\2\2vw\3"+
		"\2\2\2wx\7\t\2\2x\u0081\3\2\2\2y\u0081\7:\2\2z\u0081\78\2\2{\u0081\5H"+
		"%\2|}\5\6\4\2}~\7+\2\2~\u0081\3\2\2\2\177\u0081\5\6\4\2\u0080m\3\2\2\2"+
		"\u0080n\3\2\2\2\u0080q\3\2\2\2\u0080r\3\2\2\2\u0080y\3\2\2\2\u0080z\3"+
		"\2\2\2\u0080{\3\2\2\2\u0080|\3\2\2\2\u0080\177\3\2\2\2\u0081\17\3\2\2"+
		"\2\u0082\u0083\7>\2\2\u0083\u0085\7\b\2\2\u0084\u0086\5F$\2\u0085\u0084"+
		"\3\2\2\2\u0085\u0086\3\2\2\2\u0086\u0087\3\2\2\2\u0087\u0088\7\t\2\2\u0088"+
		"\21\3\2\2\2\u0089\u008e\5\24\13\2\u008a\u008b\t\3\2\2\u008b\u008d\5\24"+
		"\13\2\u008c\u008a\3\2\2\2\u008d\u0090\3\2\2\2\u008e\u008c\3\2\2\2\u008e"+
		"\u008f\3\2\2\2\u008f\23\3\2\2\2\u0090\u008e\3\2\2\2\u0091\u0092\7\b\2"+
		"\2\u0092\u0093\5\26\f\2\u0093\u0094\7\t\2\2\u0094\u009b\3\2\2\2\u0095"+
		"\u0096\7\65\2\2\u0096\u0097\7\b\2\2\u0097\u0098\5\26\f\2\u0098\u0099\7"+
		"\t\2\2\u0099\u009b\3\2\2\2\u009a\u0091\3\2\2\2\u009a\u0095\3\2\2\2\u009b"+
		"\25\3\2\2\2\u009c\u009d\5\b\5\2\u009d\u009e\t\4\2\2\u009e\u009f\5\b\5"+
		"\2\u009f\u00a2\3\2\2\2\u00a0\u00a2\5\b\5\2\u00a1\u009c\3\2\2\2\u00a1\u00a0"+
		"\3\2\2\2\u00a2\27\3\2\2\2\u00a3\u00a4\5\6\4\2\u00a4\u00a5\7\21\2\2\u00a5"+
		"\u00a6\5F$\2\u00a6\31\3\2\2\2\u00a7\u00b3\7(\2\2\u00a8\u00a9\7\b\2\2\u00a9"+
		"\u00ae\5\34\17\2\u00aa\u00ab\7\23\2\2\u00ab\u00ad\5\34\17\2\u00ac\u00aa"+
		"\3\2\2\2\u00ad\u00b0\3\2\2\2\u00ae\u00ac\3\2\2\2\u00ae\u00af\3\2\2\2\u00af"+
		"\u00b1\3\2\2\2\u00b0\u00ae\3\2\2\2\u00b1\u00b2\7\t\2\2\u00b2\u00b4\3\2"+
		"\2\2\u00b3\u00a8\3\2\2\2\u00b3\u00b4\3\2\2\2\u00b4\u00b5\3\2\2\2\u00b5"+
		"\u00b7\5\36\20\2\u00b6\u00b8\5 \21\2\u00b7\u00b6\3\2\2\2\u00b7\u00b8\3"+
		"\2\2\2\u00b8\u00b9\3\2\2\2\u00b9\u00ba\7\22\2\2\u00ba\33\3\2\2\2\u00bb"+
		"\u00bc\t\5\2\2\u00bc\35\3\2\2\2\u00bd\u00c2\78\2\2\u00be\u00bf\7\'\2\2"+
		"\u00bf\u00c0\7\u008e\2\2\u00c0\u00c2\7\u008d\2\2\u00c1\u00bd\3\2\2\2\u00c1"+
		"\u00be\3\2\2\2\u00c2\37\3\2\2\2\u00c3\u00c8\7\67\2\2\u00c4\u00c5\7\23"+
		"\2\2\u00c5\u00c7\7\67\2\2\u00c6\u00c4\3\2\2\2\u00c7\u00ca\3\2\2\2\u00c8"+
		"\u00c6\3\2\2\2\u00c8\u00c9\3\2\2\2\u00c9!\3\2\2\2\u00ca\u00c8\3\2\2\2"+
		"\u00cb\u00cc\5.\30\2\u00cc\u00cd\5$\23\2\u00cd#\3\2\2\2\u00ce\u00d6\7"+
		"\n\2\2\u00cf\u00d0\5D#\2\u00d0\u00d1\7\22\2\2\u00d1\u00d5\3\2\2\2\u00d2"+
		"\u00d5\5\4\3\2\u00d3\u00d5\5,\27\2\u00d4\u00cf\3\2\2\2\u00d4\u00d2\3\2"+
		"\2\2\u00d4\u00d3\3\2\2\2\u00d5\u00d8\3\2\2\2\u00d6\u00d4\3\2\2\2\u00d6"+
		"\u00d7\3\2\2\2\u00d7\u00da\3\2\2\2\u00d8\u00d6\3\2\2\2\u00d9\u00db\5D"+
		"#\2\u00da\u00d9\3\2\2\2\u00da\u00db\3\2\2\2\u00db\u00dc\3\2\2\2\u00dc"+
		"\u00dd\7\13\2\2\u00dd%\3\2\2\2\u00de\u00df\5.\30\2\u00df\u00e8\7\b\2\2"+
		"\u00e0\u00e5\5*\26\2\u00e1\u00e2\7\22\2\2\u00e2\u00e4\5*\26\2\u00e3\u00e1"+
		"\3\2\2\2\u00e4\u00e7\3\2\2\2\u00e5\u00e3\3\2\2\2\u00e5\u00e6\3\2\2\2\u00e6"+
		"\u00e9\3\2\2\2\u00e7\u00e5\3\2\2\2\u00e8\u00e0\3\2\2\2\u00e8\u00e9\3\2"+
		"\2\2\u00e9\u00eb\3\2\2\2\u00ea\u00ec\7\6\2\2\u00eb\u00ea\3\2\2\2\u00eb"+
		"\u00ec\3\2\2\2\u00ec\u00ed\3\2\2\2\u00ed\u00ef\7\t\2\2\u00ee\u00f0\5("+
		"\25\2\u00ef\u00ee\3\2\2\2\u00ef\u00f0\3\2\2\2\u00f0\u00f1\3\2\2\2\u00f1"+
		"\u00f2\5$\23\2\u00f2\'\3\2\2\2\u00f3\u00f4\7\64\2\2\u00f4\u00f5\5\22\n"+
		"\2\u00f5)\3\2\2\2\u00f6\u00f9\5\6\4\2\u00f7\u00f9\5\30\r\2\u00f8\u00f6"+
		"\3\2\2\2\u00f8\u00f7\3\2\2\2\u00f9+\3\2\2\2\u00fa\u00fb\5\60\31\2\u00fb"+
		"\u00fd\7\b\2\2\u00fc\u00fe\5F$\2\u00fd\u00fc\3\2\2\2\u00fd\u00fe\3\2\2"+
		"\2\u00fe\u00ff\3\2\2\2\u00ff\u0101\7\t\2\2\u0100\u0102\7+\2\2\u0101\u0100"+
		"\3\2\2\2\u0101\u0102\3\2\2\2\u0102\u0103\3\2\2\2\u0103\u0104\7\22\2\2"+
		"\u0104-\3\2\2\2\u0105\u010a\5\60\31\2\u0106\u0107\7\23\2\2\u0107\u0109"+
		"\5\60\31\2\u0108\u0106\3\2\2\2\u0109\u010c\3\2\2\2\u010a\u0108\3\2\2\2"+
		"\u010a\u010b\3\2\2\2\u010b/\3\2\2\2\u010c\u010a\3\2\2\2\u010d\u010f\5"+
		"8\35\2\u010e\u010d\3\2\2\2\u010f\u0110\3\2\2\2\u0110\u010e\3\2\2\2\u0110"+
		"\u0111\3\2\2\2\u0111\u0115\3\2\2\2\u0112\u0114\5\62\32\2\u0113\u0112\3"+
		"\2\2\2\u0114\u0117\3\2\2\2\u0115\u0113\3\2\2\2\u0115\u0116\3\2\2\2\u0116"+
		"\u0119\3\2\2\2\u0117\u0115\3\2\2\2\u0118\u011a\5\66\34\2\u0119\u0118\3"+
		"\2\2\2\u0119\u011a\3\2\2\2\u011a\61\3\2\2\2\u011b\u011c\7\f\2\2\u011c"+
		"\u0120\7\67\2\2\u011d\u011e\5<\37\2\u011e\u011f\t\6\2\2\u011f\u0121\3"+
		"\2\2\2\u0120\u011d\3\2\2\2\u0120\u0121\3\2\2\2\u0121\u0122\3\2\2\2\u0122"+
		"\u0123\7\r\2\2\u0123\63\3\2\2\2\u0124\u0125\7\21\2\2\u0125\u0126\7\65"+
		"\2\2\u0126\u0128\7\b\2\2\u0127\u0129\7\f\2\2\u0128\u0127\3\2\2\2\u0128"+
		"\u0129\3\2\2\2\u0129\u012a\3\2\2\2\u012a\u012c\5.\30\2\u012b\u012d\7\r"+
		"\2\2\u012c\u012b\3\2\2\2\u012c\u012d\3\2\2\2\u012d\u012e\3\2\2\2\u012e"+
		"\u012f\7\t\2\2\u012f\65\3\2\2\2\u0130\u0131\t\7\2\2\u0131\u0132\7\67\2"+
		"\2\u0132\67\3\2\2\2\u0133\u0134\5:\36\2\u0134\u0135\5> \2\u0135\u013e"+
		"\3\2\2\2\u0136\u013e\5> \2\u0137\u0138\7\30\2\2\u0138\u013e\5> \2\u0139"+
		"\u013e\5\66\34\2\u013a\u013e\5\64\33\2\u013b\u013e\7\27\2\2\u013c\u013e"+
		"\7\33\2\2\u013d\u0133\3\2\2\2\u013d\u0136\3\2\2\2\u013d\u0137\3\2\2\2"+
		"\u013d\u0139\3\2\2\2\u013d\u013a\3\2\2\2\u013d\u013b\3\2\2\2\u013d\u013c"+
		"\3\2\2\2\u013e9\3\2\2\2\u013f\u0140\t\b\2\2\u0140;\3\2\2\2\u0141\u0142"+
		"\t\t\2\2\u0142=\3\2\2\2\u0143\u0147\7\67\2\2\u0144\u0146\5@!\2\u0145\u0144"+
		"\3\2\2\2\u0146\u0149\3\2\2\2\u0147\u0145\3\2\2\2\u0147\u0148\3\2\2\2\u0148"+
		"\u0154\3\2\2\2\u0149\u0147\3\2\2\2\u014a\u014b\7\7\2\2\u014b\u014c\5B"+
		"\"\2\u014c\u0150\7\13\2\2\u014d\u014f\5@!\2\u014e\u014d\3\2\2\2\u014f"+
		"\u0152\3\2\2\2\u0150\u014e\3\2\2\2\u0150\u0151\3\2\2\2\u0151\u0154\3\2"+
		"\2\2\u0152\u0150\3\2\2\2\u0153\u0143\3\2\2\2\u0153\u014a\3\2\2\2\u0154"+
		"?\3\2\2\2\u0155\u0156\7\u0090\2\2\u0156\u0157\5B\"\2\u0157\u0158\7\13"+
		"\2\2\u0158\u015b\3\2\2\2\u0159\u015b\7\u0091\2\2\u015a\u0155\3\2\2\2\u015a"+
		"\u0159\3\2\2\2\u015bA\3\2\2\2\u015c\u015d\t\n\2\2\u015dC\3\2\2\2\u015e"+
		"\u015f\5> \2\u015f\u0160\7\21\2\2\u0160\u0161\5F$\2\u0161E\3\2\2\2\u0162"+
		"\u0167\5\b\5\2\u0163\u0164\7\23\2\2\u0164\u0166\5\b\5\2\u0165\u0163\3"+
		"\2\2\2\u0166\u0169\3\2\2\2\u0167\u0165\3\2\2\2\u0167\u0168\3\2\2\2\u0168"+
		"G\3\2\2\2\u0169\u0167\3\2\2\2\u016a\u016b\7\'\2\2\u016b\u016c\7\u008e"+
		"\2\2\u016c\u016d\7\u008d\2\2\u016dI\3\2\2\2\u016e\u0170\79\2\2\u016f\u0171"+
		"\7\5\2\2\u0170\u016f\3\2\2\2\u0170\u0171\3\2\2\2\u0171K\3\2\2\2*OX^cf"+
		"u\u0080\u0085\u008e\u009a\u00a1\u00ae\u00b3\u00b7\u00c1\u00c8\u00d4\u00d6"+
		"\u00da\u00e5\u00e8\u00eb\u00ef\u00f8\u00fd\u0101\u010a\u0110\u0115\u0119"+
		"\u0120\u0128\u012c\u013d\u0147\u0150\u0153\u015a\u0167\u0170";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}