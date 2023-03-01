export enum ArticleStatus {
    "Unapproved" = 0, //Onaylanmamış
    "WaitingApproval" = 1, //Onay Bekleyen
    "Approved" = 2, // Onaylı
    "StandBy" = 3, // Beklemede
    "Published" = 4,//Paylaşılmış
    "Deleted" = 5 //Silindi
};

export enum Claims {
    "Admin" = 0, //Yönetici; Herşey Serbest
    "Member" = 1, //Üye; Sadece görüntüleme yorum yapma
    "Author" = 2 //Yazar; CRUD operasyonları, kendi yazıları üzerinde.
}

export enum UserStatus {
    "Unapproved" = 0, //Onaylanmamış
    "Approved" = 1, // Onaylı,Aktif
    "Deleted" = 2 //Silindi

}