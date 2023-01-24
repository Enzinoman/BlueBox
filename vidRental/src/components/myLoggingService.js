class Calculator {
    private LoggingService loggingService;
    
    public Calculator(LoggingService loggingService) {
      this.loggingService = loggingService;
    }
    
    public int add(int a, int b) {
      int result = a + b;
      loggingService.log("Calculation result: " + result);
      return result;
    }
  }
  
  class LoggingService {
    public void log(String message) {
      // code to perform logging
    }
  }
  
  class CalculatorTest {
    @Test
    public void testAdd() {
      LoggingService mockLoggingService = mock(LoggingService.class);
      Calculator calculator = new Calculator(mockLoggingService);
      calculator.add(1, 2);
      verify(mockLoggingService).log("Calculation result: 3");
    }
  }
  