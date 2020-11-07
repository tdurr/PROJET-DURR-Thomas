export class Client { 

    nom : string;    
    prenom : string;    
    adresse : string;   
    cp : string;   
    ville : string;
    tel : string;   
    email : string;  
    civilite : string; 
    login : string;
    pw : string;   
    
    constructor (nom : string, prenom : string, adresse : string, cp : string, ville : string, tel : string, email : string, civilite : string, login : string, pw : string )    {      
      this.nom = nom;      
      this.prenom = prenom;      
      this.adresse = adresse;     
      this.cp = cp; 
      this.ville = ville;   
      this.tel = tel;     
      this.email = email;
      this.civilite = civilite;  
      this.login = login;   
      this.pw = pw;   
    }  
  } 