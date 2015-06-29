//
//  GCAppKit.h
//  DBDCapital
//
//  Created by Lucas Fang on 6/28/15.
//  Copyright (c) 2015 DBD Capital. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface GCAppKit : NSObject

- (void)setupApplicationWithProductionMode:(BOOL)mode;

// TODO: To be updated
+ (void)setHasShownTour:(BOOL)mode;
+ (BOOL)didRunAppBefore;


@end
