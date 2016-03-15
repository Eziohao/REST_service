# REST_service
Step 1:Implement a REST Web service with 10 operations: OP1, …, OP10. For simplicity, we assume that the operations do not require inputs and return a simple message stating that “Operation Number <put operation number here> was invoked on <put date and time here>”.
Step 2:Input: The user provides a WSCL document of the Web service mentioned above. For simplicity, we assume that the transitions are not labeled with conditions. Your implementation and design should work for any WSCL specification for the Web service.You should then obtain the list of operations provided by the Web service from the WSCL document. Based on the current state of the user’s conversation with the Web service, the system shows (on a Web interface) the operation(s) that the user will be able to invoke from that state, until the end of the coordination protocol. Each time a user selects an operation, that operation is invoked and the resulting message is shown to the user.
