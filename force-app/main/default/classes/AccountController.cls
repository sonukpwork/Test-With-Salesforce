public with sharing class AccountController {
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts() {
        return [
            SELECT Name FROM Account WITH SECURITY_ENFORCED ORDER BY Name
        ];
        throw new AuraHandledException('Forced error');
    }
}