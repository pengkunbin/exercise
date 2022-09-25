// Generated from Calc.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import CalcListener from './CalcListener.js';

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\b\u0018\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003",
    "\u0013\n\u0003\f\u0003\u000e\u0003\u0016\u000b\u0003\u0003\u0003\u0002",
    "\u0003\u0004\u0004\u0002\u0004\u0002\u0004\u0003\u0002\u0003\u0004\u0003",
    "\u0002\u0005\u0006\u0002\u0017\u0002\u0006\u0003\u0002\u0002\u0002\u0004",
    "\t\u0003\u0002\u0002\u0002\u0006\u0007\u0005\u0004\u0003\u0002\u0007",
    "\b\u0007\u0002\u0002\u0003\b\u0003\u0003\u0002\u0002\u0002\t\n\b\u0003",
    "\u0001\u0002\n\u000b\u0007\u0007\u0002\u0002\u000b\u0014\u0003\u0002",
    "\u0002\u0002\f\r\f\u0005\u0002\u0002\r\u000e\t\u0002\u0002\u0002\u000e",
    "\u0013\u0005\u0004\u0003\u0006\u000f\u0010\f\u0004\u0002\u0002\u0010",
    "\u0011\t\u0003\u0002\u0002\u0011\u0013\u0005\u0004\u0003\u0005\u0012",
    "\f\u0003\u0002\u0002\u0002\u0012\u000f\u0003\u0002\u0002\u0002\u0013",
    "\u0016\u0003\u0002\u0002\u0002\u0014\u0012\u0003\u0002\u0002\u0002\u0014",
    "\u0015\u0003\u0002\u0002\u0002\u0015\u0005\u0003\u0002\u0002\u0002\u0016",
    "\u0014\u0003\u0002\u0002\u0002\u0004\u0012\u0014"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class CalcParser extends antlr4.Parser {

    static grammarFileName = "Calc.g4";
    static literalNames = [ null, "'*'", "'/'", "'+'", "'-'" ];
    static symbolicNames = [ null, "MUL", "DIV", "ADD", "SUB", "NUMBER", 
                             "WHITESPACE" ];
    static ruleNames = [ "start", "expression" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CalcParser.ruleNames;
        this.literalNames = CalcParser.literalNames;
        this.symbolicNames = CalcParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 1:
    	    		return this.expression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 3);
    		case 1:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	start() {
	    let localctx = new StartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, CalcParser.RULE_start);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 4;
	        this.expression(0);
	        this.state = 5;
	        this.match(CalcParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 2;
	    this.enterRecursionRule(localctx, 2, CalcParser.RULE_expression, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        localctx = new NumberContext(this, localctx);
	        this._ctx = localctx;
	        _prevctx = localctx;

	        this.state = 8;
	        this.match(CalcParser.NUMBER);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 18;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 16;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MulDivContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CalcParser.RULE_expression);
	                    this.state = 10;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 11;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===CalcParser.MUL || _la===CalcParser.DIV)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 12;
	                    this.expression(4);
	                    break;

	                case 2:
	                    localctx = new AddSubContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CalcParser.RULE_expression);
	                    this.state = 13;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 14;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===CalcParser.ADD || _la===CalcParser.SUB)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 15;
	                    this.expression(3);
	                    break;

	                } 
	            }
	            this.state = 20;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


}

CalcParser.EOF = antlr4.Token.EOF;
CalcParser.MUL = 1;
CalcParser.DIV = 2;
CalcParser.ADD = 3;
CalcParser.SUB = 4;
CalcParser.NUMBER = 5;
CalcParser.WHITESPACE = 6;

CalcParser.RULE_start = 0;
CalcParser.RULE_expression = 1;

class StartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalcParser.RULE_start;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	EOF() {
	    return this.getToken(CalcParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalcListener ) {
	        listener.enterStart(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalcListener ) {
	        listener.exitStart(this);
		}
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalcParser.RULE_expression;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class NumberContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NUMBER() {
	    return this.getToken(CalcParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalcListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalcListener ) {
	        listener.exitNumber(this);
		}
	}


}

CalcParser.NumberContext = NumberContext;

class MulDivContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null; // Token;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	MUL() {
	    return this.getToken(CalcParser.MUL, 0);
	};

	DIV() {
	    return this.getToken(CalcParser.DIV, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalcListener ) {
	        listener.enterMulDiv(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalcListener ) {
	        listener.exitMulDiv(this);
		}
	}


}

CalcParser.MulDivContext = MulDivContext;

class AddSubContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null; // Token;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	ADD() {
	    return this.getToken(CalcParser.ADD, 0);
	};

	SUB() {
	    return this.getToken(CalcParser.SUB, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalcListener ) {
	        listener.enterAddSub(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalcListener ) {
	        listener.exitAddSub(this);
		}
	}


}

CalcParser.AddSubContext = AddSubContext;


CalcParser.StartContext = StartContext; 
CalcParser.ExpressionContext = ExpressionContext; 
